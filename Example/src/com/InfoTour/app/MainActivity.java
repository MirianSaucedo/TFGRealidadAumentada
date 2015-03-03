package com.InfoTour.app;
import java.io.IOException;
import java.util.Locale;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Bitmap;
import android.location.LocationManager;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.provider.Settings;
import android.util.Log;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ListView;

import com.metaio.Example.BuildConfig;
import com.metaio.Example.R;
import com.metaio.sdk.MetaioDebug;
import com.metaio.tools.io.AssetsManager;


@SuppressLint("SetJavaScriptEnabled")
public class MainActivity extends Activity
{
	
	WebView mWebView;

	/**
	 * Task that will extract all the assets
	 */
	AssetsExtracter mTask;
	
	/**
	 * Progress view
	 */
	View mProgress;

	/**
	 * True while launching a tutorial, used to prevent
	 * multiple launches of the tutorial
	 */
	boolean mLaunchingTutorial;
	AlertDialog alert = null;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) 
	{
		super.onCreate(savedInstanceState);
		
		setContentView(R.layout.webview);

		// Enable metaio SDK log messages based on build configuration
		MetaioDebug.enableLogging(BuildConfig.DEBUG);
		 
		mProgress = findViewById(R.id.progress);
		mWebView = (WebView) findViewById(R.id.webview);
		
		// extract all the assets
		mTask = new AssetsExtracter();
		mTask.execute(0);
		
		final LocationManager manager = (LocationManager) getSystemService( Context.LOCATION_SERVICE );
		if ( !manager.isProviderEnabled( LocationManager.GPS_PROVIDER ) ) {
		      AlertNoGps();
		 }
	}
	
	private void AlertNoGps() {
	    final AlertDialog.Builder builder = new AlertDialog.Builder(this);
	    builder.setMessage("El sistema GPS esta desactivado, ¿Desea activarlo?")
	           .setCancelable(false)
	           .setPositiveButton("Si", new DialogInterface.OnClickListener() {
	               public void onClick(@SuppressWarnings("unused") final DialogInterface dialog, @SuppressWarnings("unused") final int id) {
	                   startActivity(new Intent(android.provider.Settings.ACTION_LOCATION_SOURCE_SETTINGS));
	               }
	           })
	           .setNegativeButton("No", new DialogInterface.OnClickListener() {
	               public void onClick(final DialogInterface dialog, @SuppressWarnings("unused") final int id) {
	                    dialog.cancel();
	               }
	           });
	    alert = builder.create();
	    alert.show();
	  }
	
	@Override
	protected void onResume() 
	{
		super.onResume();
		mWebView.resumeTimers();
		mLaunchingTutorial = false;
	}
	
	@Override
	protected void onPause() 
	{
		super.onPause();
		mWebView.pauseTimers();
	}

	@Override
	public void onBackPressed() 
	{
		// if web view can go back, go back
		if (mWebView.canGoBack())
			mWebView.goBack();
		else
			super.onBackPressed();
	}
	
	/**
	 * This task extracts all the assets to an external or internal location
	 * to make them accessible to metaio SDK
	 */
	private class AssetsExtracter extends AsyncTask<Integer, Integer, Boolean>
	{

		@Override
		protected void onPreExecute() 
		{
			mProgress.setVisibility(View.VISIBLE);
		}
		
		@Override
		protected Boolean doInBackground(Integer... params) 
		{
			try 
			{
				// Extract all assets and overwrite existing files if debug build
				AssetsManager.extractAllAssets(getApplicationContext(), BuildConfig.DEBUG);
			} 
			catch (IOException e) 
			{
				MetaioDebug.printStackTrace(Log.ERROR, e);
				return false;
			}

			return true;
		}
		
		@Override
		protected void onPostExecute(Boolean result) 
		{
			mProgress.setVisibility(View.GONE);
			
			if (result)
			{
				WebSettings settings = mWebView.getSettings();
				
				settings.setCacheMode(WebSettings.LOAD_NO_CACHE);
				settings.setJavaScriptEnabled(true);
				
				mWebView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);
				mWebView.setWebViewClient(new WebViewHandler());
				mWebView.loadUrl("file:///android_asset/Menu/index.html");
				mWebView.setVisibility(View.VISIBLE);
			}
			else
			{
				MetaioDebug.log(Log.ERROR, "Error extracting assets, closing the application...");
				finish();
			}
		}
	}
	
	
	class WebViewHandler extends WebViewClient
	{
		@Override
		public void onPageStarted(WebView view, String url, Bitmap favicon) 
		{
			mProgress.setVisibility(View.VISIBLE);
		}
		
		@Override
		public void onPageFinished(WebView view, String url) 
		{
			mProgress.setVisibility(View.GONE);
		}
		
		@Override
		public boolean shouldOverrideUrlLoading(WebView view, String url) 
		{
			if (!url.toLowerCase(Locale.US).startsWith("metaiosdkexample"))
			{
				if (url.contains("metaio.com"))
				{
					// Open external browser
					Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
					intent.addCategory(Intent.CATEGORY_BROWSABLE);
					startActivity(intent);
					return true;
				}

				return false;
			}
			else if (mLaunchingTutorial)
			{
				return true;
			}
			
			
			final String tutorialId = url.substring(url.lastIndexOf("=") + 1);
			MetaioDebug.log("Tutorial ID detected: "+tutorialId);
			
			if (url.toLowerCase(Locale.US).startsWith("metaiosdkexample://"))
			{
				try 
				{
					final Class<?> activity = Class.forName(getPackageName()+".Tutorial"+tutorialId);
					mLaunchingTutorial = true;
					startActivity(new Intent(getApplicationContext(), activity));
				} 
				catch (ClassNotFoundException e) 
				{
					MetaioDebug.log(Log.ERROR, "Invalid tutorial id, class not found!");
				}
			}
			else if (url.toLowerCase(Locale.US).startsWith("metaiosdkexamplearel://"))
			{
				if (tutorialId != null)
				{
					
					final String arelConfigFile = "arelConfig.xml";
					final String arelConfigFilePath = AssetsManager.getAssetPath(getApplicationContext(), "Tutorial"+tutorialId+"/"+arelConfigFile);
					MetaioDebug.log("arelConfig to be passed to intent: "+arelConfigFilePath);
					Intent intent = new Intent(getApplicationContext(), ARELViewActivity.class);
					intent.putExtra(getPackageName()+".AREL_SCENE", arelConfigFilePath);
					mLaunchingTutorial = true;
					startActivity(intent);
				}
			}
			
			return true;
		}
	}
}


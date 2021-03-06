
package com.metaio.InfoTour;
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

import com.metaio.InfoTour.BuildConfig;
import com.metaio.InfoTour.R;
import com.metaio.sdk.MetaioDebug;
import com.metaio.tools.io.AssetsManager;

/**
 * Copyright 2015 Pedro Damian Gonzalez, Lizza Lopez, Mirian Saucedo
 * Todos los derechos reservados
 * Tesis de Realidad aumentada
 * Clase principal para cargar todos los componentes de la app
 * @authors Pedro Damian Gonzalez, Lizza Lopez, Mirian Saucedo
 */
@SuppressLint("SetJavaScriptEnabled")
public class MainActivity extends Activity
{
	
	WebView mWebView;

	/**
	 * Este es el task encargado de extraer todos los assets
	 */
	AssetsExtracter mTask;
	
	/**
	 * Progress view
	 */
	View mProgress;

	/**
	 * True cuando muestra un recorrido, usado para prevenir 
	 * multiples vistas de un recorrido
	 */
	boolean mLaunchingRecorrido;
	AlertDialog alert = null;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) 
	{
		super.onCreate(savedInstanceState);
		
		setContentView(R.layout.webview);

		// Seteamos a enable para los mensajes de metaiosdk
		MetaioDebug.enableLogging(BuildConfig.DEBUG);
		 
		mProgress = findViewById(R.id.progress);
		mWebView = (WebView) findViewById(R.id.webview);
		
		// extrae todos los assets
		mTask = new AssetsExtracter();
		mTask.execute(0);
		
		final LocationManager manager = (LocationManager) getSystemService( Context.LOCATION_SERVICE );
		if ( !manager.isProviderEnabled( LocationManager.GPS_PROVIDER ) ) {
		      AlertNoGps();
		 }
	}
	
	/**
	 * Metodo encargado para mostrar un alert si es que no esta encendido el GPS cuando inicia la app
	 */
	private void AlertNoGps() {
	    final AlertDialog.Builder builder = new AlertDialog.Builder(this);
	    builder.setMessage("El sistema GPS esta desactivado, �Desea activarlo?")
	           .setCancelable(false)
	           .setPositiveButton("Si", new DialogInterface.OnClickListener() {
	               public void onClick(@SuppressWarnings("unused") final DialogInterface dialog, @SuppressWarnings("unused") final int id) {
	                   startActivity(new Intent(android.provider.Settings.ACTION_LOCATION_SOURCE_SETTINGS));
	               }
	           })
	           .setNegativeButton("No", new DialogInterface.OnClickListener() {
	               public void onClick(final DialogInterface dialog, @SuppressWarnings("unused") final int id) {
	                    dialog.cancel();
	                    finish();
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
		mLaunchingRecorrido = false;
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
		// si la vista puede ir para atr�s va para atr�s.
		if (mWebView.canGoBack())
			mWebView.goBack();
		else
			super.onBackPressed();
	}
	
	/**
	 * Metodo para extraer todos los assets desde un lugar externo o interno
	 * para hacer accesibles a metaiosdk
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
				// Extrae los assets y sobreescribe los archivos
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
			if (!url.toLowerCase(Locale.US).startsWith("metaiosdk"))
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
			else if (mLaunchingRecorrido)
			{
				return true;
			}
			
			
			final String recorridoId = url.substring(url.lastIndexOf("=") + 1);
			MetaioDebug.log("Recorrido ID detectectado: "+recorridoId);
			
			if (url.toLowerCase(Locale.US).startsWith("metaiosdk://"))
			{
				try 
				{
					final Class<?> activity = Class.forName(getPackageName()+"."+recorridoId);
					mLaunchingRecorrido = true;
					startActivity(new Intent(getApplicationContext(), activity));
				} 
				catch (ClassNotFoundException e) 
				{
					MetaioDebug.log(Log.ERROR, "Recorrido id invalido, clase no encontrada!");
				}
			}
			else if (url.toLowerCase(Locale.US).startsWith("metaiosdkarel://"))
			{
				if (recorridoId != null)
				{
					
					final String arelConfigFile = "arelConfig.xml";
					final String arelConfigFilePath = AssetsManager.getAssetPath(getApplicationContext(), "Recorrido"+recorridoId+"/"+arelConfigFile);
					MetaioDebug.log("arelConfig pasado al intent: "+arelConfigFilePath);
					Intent intent = new Intent(getApplicationContext(), ARELViewActivity.class);
					intent.putExtra(getPackageName()+".AREL_SCENE", arelConfigFilePath);
					mLaunchingRecorrido = true;
					startActivity(intent);
				}
			}
			
			return true;
		}
	}
}


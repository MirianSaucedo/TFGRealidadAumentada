
package com.InfoTour.app;


import android.view.View;
import android.widget.Toast;

import com.metaio.Example.R;
import com.metaio.sdk.ARELActivity;
import com.metaio.sdk.jni.IARELObject;


public class ARELViewActivity extends ARELActivity 
{
	@Override
	protected int getGUILayout() 
	{
		return R.layout.arel;
	}
	
	public void onButtonClick(View v)
	{
		finish();
	}
}

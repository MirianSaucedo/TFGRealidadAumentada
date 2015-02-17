
package com.InfoTour.app;


import android.view.View;

import com.metaio.Example.R;
import com.metaio.sdk.ARELActivity;


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

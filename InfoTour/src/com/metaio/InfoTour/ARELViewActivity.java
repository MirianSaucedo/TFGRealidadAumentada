
package com.metaio.InfoTour;


import android.view.View;

import com.metaio.InfoTour.R;
import com.metaio.sdk.ARELActivity;

/**
 * Clase necesaria para leer el layout de arel, usada para el proyecto
 * @authors Pedro Damian Gonzalez, Lizza Lopez, Mirian Saucedo
 * Tesis de Realidad aumentada
 */
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

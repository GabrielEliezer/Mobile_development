import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'length',
    loadChildren: () => import('./length/length.module').then( m => m.LengthPageModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./temperature/temperature.module').then( m => m.TemperaturePageModule)
  },
  {
    path: 'coin',
    loadChildren: () => import('./coin/coin.module').then( m => m.CoinPageModule)
  },  {
    path: 'speed',
    loadChildren: () => import('./speed/speed.module').then( m => m.SpeedPageModule)
  },
  {
    path: 'time',
    loadChildren: () => import('./time/time.module').then( m => m.TimePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

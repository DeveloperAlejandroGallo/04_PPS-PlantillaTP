import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'splash', loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule) },
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'bienvenido', loadChildren: () => import('./pages/bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/core/guards/auth.guard';
import { NonAuthGuard } from '../app/core/guards/non-auth.guard';

const routes: Routes = [
  { 
    path: '', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
  }, 
  { 
    path: '', 
    canActivate: [NonAuthGuard],
    loadChildren: () => import('./modules/non-auth/non-auth.module').then(m => m.NonAuthModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

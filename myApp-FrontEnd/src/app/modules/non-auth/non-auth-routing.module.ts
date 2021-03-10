import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonAuthComponent } from './non-auth.component';

const routes: Routes = [{ path: '', component: NonAuthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonAuthRoutingModule { }

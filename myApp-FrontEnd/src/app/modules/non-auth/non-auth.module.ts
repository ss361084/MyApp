import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonAuthRoutingModule } from './non-auth-routing.module';
import { NonAuthComponent } from './non-auth.component';


@NgModule({
  declarations: [NonAuthComponent],
  imports: [
    CommonModule,
    NonAuthRoutingModule
  ]
})
export class NonAuthModule { }

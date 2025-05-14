import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AuthLayoutComponent } from '../shared/layout/auth-layout/auth-layout.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesRoutingModule, AuthLayoutComponent],
})
export class PagesModule {}

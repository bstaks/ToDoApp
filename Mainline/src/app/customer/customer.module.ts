import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CustomerComponent],
  declarations: [CustomerComponent]
})
export class CustomerModule {

  }

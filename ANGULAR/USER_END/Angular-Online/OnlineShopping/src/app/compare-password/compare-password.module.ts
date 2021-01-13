import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComparePasswordDirective } from '../directives/compare-password.directive';



@NgModule({
  declarations: [
    ComparePasswordDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComparePasswordDirective
  ]
})
export class ComparePasswordModule { }
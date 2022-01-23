import { NgModule } from '@angular/core';
import { TabularviewComponent } from './tabularview.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TabularviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TabularviewComponent
  ]
})
  
export class TabularviewModule { }

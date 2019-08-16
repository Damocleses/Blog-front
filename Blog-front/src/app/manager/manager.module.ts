import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';



@NgModule({
  declarations: [
    ManagerModule
  ],
  imports: [
    CommonModule
  ],
  exports:[ManagerComponent]
})
export class ManagerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ProductComponent]
})
export class SharedComponentsModule { }

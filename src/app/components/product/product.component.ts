import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input('product') product: any;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

  async byItem(product) {
    let toast = await this.toastCtrl.create({
      message: `Added to the cart: ${product.name}`
    });
    toast.present();
  }

}

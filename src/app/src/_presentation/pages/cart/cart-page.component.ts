import {Component} from '@angular/core';
import {CartService} from '../../../_core';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicle} from '../../../_data/models';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})

export class CartPageComponent {
  public vehicle: Vehicle;


  constructor(private cartService: CartService, private router: Router) {
    this.vehicle = new Vehicle();
  }
  public productClick(vin: string) {
    this.router.navigate([`product/${vin}`]).then();
  }
}

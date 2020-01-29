import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CartService} from '../../../_core/cart';

@Component({
  selector: 'app-checkout-page',
  styleUrls: ['./checkout-page.component.scss'],
  templateUrl: './checkout-page.component.html'
})
export class CheckoutPageComponent {

  public form: FormGroup;
  public validationHelper = ValidationHelper;

  constructor(private cartService: CartService) {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      firstName: new FormControl('', [
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required
      ]),
      city: new FormControl('', [
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required
      ]),
      zipCode: new FormControl('', [
        Validators.pattern('[0-9]*'),
        Validators.minLength(5),
        Validators.required
      ]),
      state: new FormControl('', [
        Validators.minLength(5),
        Validators.required
      ])
    });
  }

/*

  get first(): any {
    return this.form.get('first');
  }*/
isShown = false;

submit() {
this.isShown = !this.isShown;
const x = ('AH ') + Math.floor(+ (Math.random() * 1000000 ) + 1000);
return x;
  }


/*
  setValue() {
    this.form.setValue({first: 'Carson', last: 'Drew'});
  }*/

  public getOrderNumber() {
    return ('AH ') + Math.floor(+ (Math.random() * 1000000 ) + 1000);
  }
}

export class ValidationHelper {
  public static isValid(propName: string, form: FormGroup): boolean {
    let result = false;
    try {
      result = form.get(propName).valid && form.get(propName).dirty && form.get(propName).value !== '';
    } catch (e) {
      console.log(`Wrong property name: ${propName}`);
    }

    return result;
  }

  public static isInvalid(propName: string, form: FormGroup): boolean {
    let result = false;
    try {
      result = form.get(propName).invalid && (form.get(propName).dirty || form.get(propName).touched);
    } catch (e) {
      console.log(`Wrong property name: ${propName}`);
    }
    return result;
  }
}

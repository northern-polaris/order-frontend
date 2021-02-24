import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../order.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-oder-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  orderForm: FormGroup;
  customerList: any[];
  productList: any[];
  id: number;
  totalPrice: number;

  constructor(public fb: FormBuilder,
              protected orderService: OrderService,
              private snackBar: MatSnackBar,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location,
  ) {
  }

  ngOnInit(): void {


    this.getOrderDependencies();
    this.orderForm = this.fb.group({
      customer_id: ['', Validators.required],
      order_units: this.fb.array([])
    });


    // get if from url
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.orderService.retrieveOrder(this.id).subscribe(response => {
          for (const orderUnit of response['order_units']) {
            this.addOrderUnit();
          }
          this.orderForm.patchValue(response);
        }
      );

    } else {
      this.addOrderUnit();

    }
    this.onChangeOfOrderForm();
  }

  orderUnitForm(): FormGroup {
    return this.fb.group({
      product_id: ['', Validators.required],
      amount: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addOrderUnit(): void {
    const orderUnits = this.orderForm.controls.order_units as FormArray;
    orderUnits.push(this.orderUnitForm());
  }

  onChangeOfProduct(orderUnit): void {

    const productId = orderUnit.value.product_id;
    for (const product of this.productList) {

      if (productId === product.id) {
        orderUnit.controls['price'].setValue(product.price);

      }
    }

    console.log(this.productList);
    console.log(orderUnit);
  }

  onChangeOfOrderForm(): void {
    this.orderForm.valueChanges.subscribe(value => {

      let total = 0;
      for (const orderUnit of value.order_units) {
        total = total + (orderUnit.price * orderUnit.amount);
      }
      this.totalPrice = total;
    });
  }


  getOrderDependencies(): void {
    this.orderService.getOrderDependencies().subscribe(response => {
      this.customerList = response['customers'];
      this.productList = response['products'];
    });
  }


  removeOrderUnit(orderUnitIndex): void {
    const orderUnits = this.orderForm.controls.order_units as FormArray;
    orderUnits.removeAt(orderUnitIndex);

  }

  backClicked(): void {
    this.location.back();
  }


  submit(): void {
    const serializedForm = Object.assign({}, this.orderForm.value);

    if (this.id) {
      //  Update request
      serializedForm.id = this.id;
      this.orderService.putOrder(serializedForm).subscribe(response => {
        this.snackBar.open('Perditesimi u krye me sukses', 'close', {
          duration: 5000,
        });
        this.router.navigate(['/order/list']).then();

      });


    } else {
      //  Post request
      this.orderService.postOrder(serializedForm).subscribe(response => {
          this.snackBar.open('Shtimi u krye me sukses', 'close', {
            duration: 5000,
          });
          this.router.navigate(['/order/list']).then();
        },
        onError => {
          console.log(onError);
        }
      );
    }

  }

}




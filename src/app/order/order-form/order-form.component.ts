import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../order.service';

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

  constructor(public fb: FormBuilder,
              protected orderService: OrderService,
              private snackBar: MatSnackBar,
              private router: Router,
              private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getOrderDependencies();
    this.orderForm = this.fb.group({
      customer_id: ['', Validators.required],
      order_units: this.fb.array([])
    });
  }

  addOrderUnit(): void {
    const orderUnit = this.orderForm.controls.order_units as FormArray;
    orderUnit.push(this.orderUnitForm());
  }

  orderUnitForm(): FormGroup {
    return this.fb.group({
      product_id: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  getOrderDependencies(): void {
    this.orderService.getOrderDependencies().subscribe(response => {
      this.customerList = response['customers'];
      this.productList = response['products'];
    });
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




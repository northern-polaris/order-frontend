import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;

  constructor(public fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
        name: ['', Validators.required],
        default_price: ['', Validators.required],
        product_category: ['', Validators.required],
      }
    );
  }

  submit(): void {
  }

}

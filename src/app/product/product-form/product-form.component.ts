import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;

  constructor(public fb: FormBuilder, protected productService: ProductService) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
        name: ['', Validators.required],
        default_price: ['', Validators.required],
        description: ['', Validators.required],
        // product_category: ['', Validators.required],
        product_category: [[1], Validators.required],
      }
    );
  }

  submit(): void {
    const serializedForm = Object.assign({}, this.productForm.value);
    this.productService.postProduct(serializedForm).subscribe(response => {
      console.log(response);
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  categories = [];

  constructor(public fb: FormBuilder,
              protected productService: ProductService,
              private snackBar: MatSnackBar,
              private router: Router) {}

  ngOnInit(): void {
    this.getCategories();
    this.productForm = this.fb.group({
        name: ['', Validators.required],
        default_price: ['', Validators.required],
        description: ['', Validators.required],
        // product_category: ['', Validators.required],
        product_category: [null, Validators.required],

      }
    );

  }

  submit(): void {
    const serializedForm = Object.assign({}, this.productForm.value);
    this.productService.postProduct(serializedForm).subscribe(response => {
        this.snackBar.open('Shtimi u krye me sukses', 'close', {
          duration: 5000,
        });
        this.router.navigate(['product/list']).then();
      },
      onError => {
        console.log(onError);
      }
    );
  }

  getCategories(): void {
    this.productService.getCategoryList().subscribe(response => {
      this.categories = response['results'];

    });

  }

}

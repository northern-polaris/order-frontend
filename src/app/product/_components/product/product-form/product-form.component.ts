import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../_services/product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  categories = [];
  id: number;

  constructor(public fb: FormBuilder,
              protected productService: ProductService,
              private snackBar: MatSnackBar,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location,
  ) {
  }


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
    // get id from url
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.retrieveProduct(this.id).subscribe(response => {
          this.productForm.patchValue(response);
        }
      );

    }

  }

  backClicked(): void {
    this.location.back();
  }


  submit(): void {
    const serializedForm = Object.assign({}, this.productForm.value);

    if (this.id) {
      //  Update request
      serializedForm.id = this.id;
      this.productService.putProduct(serializedForm).subscribe(response => {
        this.snackBar.open('Perditesimi u krye me sukses', 'close', {
          duration: 5000,
        });
        this.router.navigate(['product/list']).then();

      });


    } else {
      //  Post request
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

  }

  getCategories(): void {
    this.productService.getCategoryList().subscribe(response => {
      this.categories = response['results'];

    });

  }

}

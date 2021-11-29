import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../_services/product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  id: number;
}


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
              // we use them when opened with mat dialog
              public dialogRef: MatDialogRef<ProductFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData
              // @Inject(MAT_DIALOG_DATA) public data: {id:number}
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

    if (this.data?.id) {
      // get id from this.data if component is opened with dialog
      this.id = this.data.id;
    }


    if (this.id) {
      this.productService.retrieve(this.id).subscribe(response => {
          this.productForm.patchValue(response);
        }
      );

    }

  }


  submit(): void {
    const serializedForm = Object.assign({}, this.productForm.value);

    if (this.id) {
      serializedForm.id = this.id;
      this.productService.put(serializedForm).subscribe(response => {
        if (this.data?.id) {
          this.dialogRef.close();

        } else {
          this.router.navigate(['product/list']).then();
        }

      });


    } else {
      this.productService.post(serializedForm).subscribe(response => {
          this.dialogRef.close();
        },
      );
    }

  }

  getCategories(): void {
    this.productService.getCategoryList().subscribe(response => {
      this.categories = response.results;

    });

  }

}

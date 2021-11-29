import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SellerService} from '../../../_services/seller.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../../../../product/_components/product/product-form/product-form.component';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.css']
})
export class SellerFormComponent implements OnInit {
  sellerForm: FormGroup;
  id: number;

  constructor(public fb: FormBuilder,
              protected agentService: SellerService,
              private snackBar: MatSnackBar,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              public dialogRef: MatDialogRef<SellerFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  ngOnInit(): void {
    this.sellerForm = this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.id = this.data.id;
    if (this.id) {
      this.agentService.retrieve(this.id).subscribe(response => {
          this.sellerForm.patchValue(response);
        }
      );

    }


  }

  backClicked(): void {
    this.location.back();
  }

  submit(): void {
    const serializedForm = Object.assign({}, this.sellerForm.value);

    if (this.id) {
      if (this.data?.id) {
        serializedForm.id = this.id;
        this.agentService.put(serializedForm).subscribe(response => {
          this.dialogRef.close();
        });


      } else {
        this.agentService.postSeller(serializedForm).subscribe(response => {
            this.dialogRef.close();
          },
          onError => {
            console.log(onError);
          }
        );
      }
    }


  }
}

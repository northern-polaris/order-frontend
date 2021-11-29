import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../../_services/customer.service';
import {Location} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../../../../product/_components/product/product-form/product-form.component';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;
  id: number;

  constructor(public fb: FormBuilder,
              protected agentService: CustomerService,
              private snackBar: MatSnackBar,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              public dialogRef: MatDialogRef<CustomerFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      company_name: ['', Validators.required],
    });


    // get if data
    this.id = this.data.id;

    if (this.id) {
      this.agentService.retrieveCustomer(this.id).subscribe(response => {
          this.customerForm.patchValue(response);
        }
      );

    }
  }

  backClicked(): void {
    this.location.back();
  }


  submit(): void {
    const serializedForm = Object.assign({}, this.customerForm.value);

    if (this.data?.id) {
      //  Update request
      serializedForm.id = this.id;
      this.agentService.putCustomer(serializedForm).subscribe(response => {
        this.snackBar.open('The action was performed successfully', 'close', {
          duration: 5000,
        });
        this.dialogRef.close();
        // this.router.navigate(['customer/list']).then();

      });


    } else {
      //  Post request
      this.agentService.postCustomer(serializedForm).subscribe(response => {
          this.snackBar.open('The action was performed successfully', 'close', {
            duration: 5000,
          });
          this.dialogRef.close();
        },
        onError => {
          console.log(onError);
        }
      );
    }
  }


}



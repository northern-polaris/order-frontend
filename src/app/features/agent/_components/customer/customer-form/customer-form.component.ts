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

    this.id = this.data.id;

    if (this.id) {
      this.agentService.retrieve(this.id).subscribe(response => {
          this.customerForm.patchValue(response);
        }
      );

    }
  }

  submit(): void {
    const serializedForm = Object.assign({}, this.customerForm.value);

    if (this.data?.id) {
      serializedForm.id = this.id;
      this.agentService.put(serializedForm).subscribe(response => {
        this.dialogRef.close();
      });


    } else {
      this.agentService.post(serializedForm).subscribe(response => {
          this.dialogRef.close();
        },
      );
    }
  }


}



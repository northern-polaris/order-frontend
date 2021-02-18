import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../customer.service';

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
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      company_name: ['', Validators.required],
    });

    // get if from url
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.agentService.retrieveCustomer(this.id).subscribe(response => {
          this.customerForm.patchValue(response);
        }
      );

    }
  }

  submit(): void {
    const serializedForm = Object.assign({}, this.customerForm.value);

    if (this.id) {
      //  Update request
      serializedForm.id = this.id;
      this.agentService.putCustomer(serializedForm).subscribe(response => {
        this.snackBar.open('Perditesimi u krye me sukses', 'close', {
          duration: 5000,
        });
        this.router.navigate(['customer/list']).then();

      });


    } else {
      //  Post request
      this.agentService.postCustomer(serializedForm).subscribe(response => {
          this.snackBar.open('Shtimi u krye me sukses', 'close', {
            duration: 5000,
          });
          this.router.navigate(['customer/list']).then();
        },
        onError => {
          console.log(onError);
        }
      );
    }
  }


}



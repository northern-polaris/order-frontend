import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SellerService} from '../seller.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

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
  ) {
  }

  ngOnInit(): void {
    this.sellerForm = this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
    });

    // get if from url
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.agentService.retrieveSeller(this.id).subscribe(response => {
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
      //  Update request
      serializedForm.id = this.id;
      this.agentService.putSeller(serializedForm).subscribe(response => {
        this.snackBar.open('Perditesimi u krye me sukses', 'close', {
          duration: 5000,
        });
        this.router.navigate(['seller/list']).then();

      });


    } else {
      //  Post request
      this.agentService.postSeller(serializedForm).subscribe(response => {
          this.snackBar.open('Shtimi u krye me sukses', 'close', {
            duration: 5000,
          });
          this.router.navigate(['seller/list']).then();
        },
        onError => {
          console.log(onError);
        }
      );
    }
  }


}

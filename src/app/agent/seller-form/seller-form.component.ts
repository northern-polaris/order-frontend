import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../product/product.service';
import {SellerService} from '../seller.service';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.css']
})
export class SellerFormComponent implements OnInit {
  sellerForm: FormGroup;

  constructor(public fb: FormBuilder, protected agentService: SellerService) {
  }

  ngOnInit(): void {
    this.sellerForm = this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  submit(): void {
    const serializedForm = Object.assign({}, this.sellerForm.value);
    this.agentService.postSeller(serializedForm).subscribe(response => {
      console.log(response);
    });
  }

}

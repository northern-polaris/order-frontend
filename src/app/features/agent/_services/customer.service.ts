import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from '../../../core/service/generic.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends GenericService {

  constructor(protected http: HttpClient,
              protected matSnackBar: MatSnackBar,
  ) {
    super(http, matSnackBar, 'agent/customer/');
  }
}

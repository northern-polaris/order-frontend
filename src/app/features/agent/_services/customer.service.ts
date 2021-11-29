import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
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



  // getCustomerList(pageIndex): Observable<any> {
  //   return this.http.get<any>(environment.apiHost +  + `?page=${pageIndex + 1}`);
  // }
  //
  // postCustomer(customer): Observable<any> {
  //   return this.http.post<any>(environment.apiHost + 'agent/customer/', customer);
  //
  // }
  //
  // retrieveCustomer(id): Observable<any> {
  //   return this.http.get<any>(environment.apiHost + `agent/customer/${id}/`);
  // }
  //
  // putCustomer(customer): Observable<any> {
  //   return this.http.put<any>(environment.apiHost + `agent/customer/${customer.id}/`, customer);
  // }
  //
  // deleteCustomer(id): Observable<any> {
  //   return this.http.delete(environment.apiHost + `agent/customer/${id}/`);
  // }

}

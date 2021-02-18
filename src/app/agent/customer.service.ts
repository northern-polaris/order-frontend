import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(protected  http: HttpClient) {
  }

  getCustomerList(pageIndex): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'agent/customer/' +  `?page=${pageIndex + 1}`);
  }
  postCustomer(customer): Observable<any> {
    return this.http.post<any>(environment.apiHost + 'agent/customer/form/', customer);

  }

  retrieveCustomer(id): Observable<any> {
    return this.http.get<any>(environment.apiHost + `agent/customer/${id}/`);
  }

  putCustomer(customer): Observable<any> {
    return this.http.put<any>(environment.apiHost + `agent/customer/${customer.id}/`, customer);
  }
}

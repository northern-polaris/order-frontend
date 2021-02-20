import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(protected http: HttpClient) {
  }

  getOrder(): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'order/list/');


  }

  getOrderDependencies(): Observable<any>{
    return this.http.get<any>(environment.apiHost + 'order/order-form-dependencies/');
  }

}

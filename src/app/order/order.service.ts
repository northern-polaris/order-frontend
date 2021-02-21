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

  getOrder(pageIndex): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'order/list/' + `?page=${pageIndex + 1}`);

  }

  putOrder(order): Observable<any> {
    return this.http.put<any>(environment.apiHost + `order/list/${order.id}/`, order);
  }

  postOrder(order): Observable<any> {
    return this.http.post<any>(environment.apiHost + 'order/list/', order);

  }

  getOrderDependencies(): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'order/order-form-dependencies/');
  }

  deleteOrder(id): Observable<any> {
    return this.http.delete(environment.apiHost + `order/list/${id}/`);
  }


}

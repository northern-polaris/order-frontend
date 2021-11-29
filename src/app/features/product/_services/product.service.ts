import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(protected http: HttpClient) {
  }

  getProductList(pageIndex): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'product/list/' + `?page=${pageIndex + 1}`);
  }

  postProduct(product): Observable<any> {
    return this.http.post<any>(environment.apiHost + 'product/list/', product);

  }

  getCategoryList(): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'product/list/category/');
  }

  retrieveProduct(id): Observable<any> {
    return this.http.get<any>(environment.apiHost + `product/list/${id}/`);
  }

  putProduct(product): Observable<any> {
    return this.http.put<any>(environment.apiHost + `product/list/${product.id}/`, product);
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete(environment.apiHost + `product/list/${id}/`);
  }

}
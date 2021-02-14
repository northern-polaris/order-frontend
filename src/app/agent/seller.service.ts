import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(protected http: HttpClient) {
  }

  getSellerList(pageIndex): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'agent/seller/' + `?page=${pageIndex + 1}`);
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(protected http: HttpClient) {
  }

  getSellerList(pageIndex): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'agent/seller/' + `?page=${pageIndex + 1}`);
  }

  postSeller(seller): Observable<any> {
    return this.http.post<any>(environment.apiHost + 'agent/seller/', seller);

  }

  retrieveSeller(id): Observable<any> {
    return this.http.get<any>(environment.apiHost + `agent/seller/${id}/`);
  }

  putSeller(seller): Observable<any> {
    return this.http.put<any>(environment.apiHost + `agent/seller/${seller.id}/`, seller);
  }

  deleteSeller(id): Observable<any> {
    return this.http.delete(environment.apiHost + `agent/seller/${id}/`);
  }

  isActiveSeller(data): Observable<any> {
    return this.http.post(environment.apiHost + `agent/seller/deactivate/`, data);
  }

}

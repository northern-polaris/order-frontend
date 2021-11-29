import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {GenericService} from '../../../core/service/generic.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SellerService extends GenericService {
  constructor(protected http: HttpClient,
              protected matSnackBar: MatSnackBar,
  ) {
    super(http, matSnackBar, 'agent/seller/');
  }

  postSeller(seller): Observable<any> {
    return this.http.post<any>(environment.apiHost + 'agent/seller/', seller);
  }

  isActiveSeller(data): Observable<any> {
    return this.http.post(environment.apiHost + `agent/seller/deactivate/`, data);
  }

}

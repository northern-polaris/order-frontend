import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {GenericService} from '../../../core/service/generic.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends GenericService {


  constructor(protected http: HttpClient,
              protected matSnackBar: MatSnackBar,
  ) {
    super(http, matSnackBar, 'order/list/');
  }


  getOrderDependencies(): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'order/order-form-dependencies/');
  }


}

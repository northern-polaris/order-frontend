import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {GenericService} from '../../../core/service/generic.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService {

  constructor(protected http: HttpClient,
              protected matSnackBar: MatSnackBar,
  ) {
    super(http, matSnackBar, 'product/list/');
  }

  getCategoryList(): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'product/list/category/');
  }

}

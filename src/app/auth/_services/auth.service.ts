import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected http: HttpClient) {
  }

  postUser(user): Observable<any> {
    return this.http.post<any>(environment.apiHost + 'login/', user);

  }
}

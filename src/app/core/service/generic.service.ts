import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

export interface BEResponse<T> {
  count: number;
  next: number;
  previous: number;
  results: T[];
}


@Injectable({
  providedIn: 'root'
})
export class GenericService {


  protected constructor(
    protected http: HttpClient,
    protected matSnackBar: MatSnackBar,
    private apiURL: string = '',
  ) {
    this.setEndpoint(apiURL);
  }

  private endpoint: string;


  setEndpoint(path: string): void {
    this.endpoint = `${environment.apiHost}${path}`;
  }

  private generateHttpParams(params: { [key: string]: any }): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key: string) => {
      httpParams = httpParams.set(key, (params as any)[key]);
    });

    return httpParams;
  }

  post<T>(object: T, url?: string): Observable<T> {
    const endpoint = url ? url : this.endpoint;
    return this.http.post<T>(endpoint, object).pipe(
      catchError(error => {
        return this.handleError(error);
      }),
      tap((response: T) => {
        this.matSnackBar.open('Created!', 'close', {
          duration: 5000,
        });
      })
    );
  }

  put<T>(object: T | any, url?: string): Observable<T> {
    const endpoint = url ? url : this.endpoint;
    return this.http.put<T>(endpoint + `${object.id}/`, object).pipe(
      catchError(error => {
        return this.handleError(error);
      }),
      tap((response: T) => {
        this.matSnackBar.open('Updated!', 'close', {
          duration: 5000,
        });
      }),
    );
  }

  list<T>(params: object = {}, url?: string): Observable<BEResponse<T | any>> {
    const endpoint = url ? url : this.endpoint;
    const queryParams = this.generateHttpParams(params);
    const options = {params: queryParams};
    return this.http.get<any>(endpoint, options);
  }

  retrieve<T>(identifier: number | string, url?: string): Observable<T> {
    const endpoint = url ? url : this.endpoint;
    return this.http.get<T>(endpoint + `${identifier}/`);
  }

  delete(identifier: number | string, url?: string): Observable<any> {
    const endpoint = url ? url : this.endpoint;
    return this.http.delete(endpoint + `${identifier}/`).pipe(
      catchError(error => {
        return this.handleError(error);
      }),
      tap(() => {
        this.matSnackBar.open('The action was performed successfully', 'close', {
          duration: 5000,
          panelClass: ['on-delete-snackbar']
        });
      })
    );
  }

  private handleError(err): any {
    this.matSnackBar.open('Error!', 'close', {
      duration: 5000,
    });
    return throwError(err);
  }
}

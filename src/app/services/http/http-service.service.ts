import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BACKEND_URL } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  public get(url: string): Observable<any> {
    return this.http.get(`${BACKEND_URL}/${url}`)
  }

}

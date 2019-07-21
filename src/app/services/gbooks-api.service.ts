import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GbooksApiService {
  constructor(private http: HttpClient) { }

  queryApi(query: string, startIndex: number = 0, maxResults: number = 10): Observable<any> {
    return (this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
    ));
  }

  selectBookItem(id: string): Observable<any> {
    // return the selfLink
    return (this.http.get(
      'https://www.googleapis.com/books/v1/volumes/' + id));
  }

}

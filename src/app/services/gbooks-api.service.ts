import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GbooksApiService {
  constructor(private http: HttpClient) { }

  queryApi(query: string, startIndex: number = 0, maxResults: number = 10) {
    return (this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
    ));
  }
}

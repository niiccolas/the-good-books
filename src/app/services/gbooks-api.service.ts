import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GbooksApiService {
  constructor(private http: HttpClient) { }

  queryApi(title: string, author: string, isbn: string,  startIndex: number = 0, maxResults: number = 10): Observable<any> {
    // Initialize GbooksAPI specific keywords needed to build the query
    const titleKey  = title  === '' ? '' : `intitle:${title}+`;
    const authorKey = author === '' ? '' : `inauthor:${author}+`;
    const isbnKey   = isbn   === '' ? '' : `isbn:${isbn}+`;

    // Testing Query
    console.log(`${titleKey}${authorKey}${isbnKey}&maxResults=${maxResults}&startIndex=${startIndex}`);

    return (this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=${titleKey}${authorKey}${isbnKey}&maxResults=${maxResults}&startIndex=${startIndex}`
    ));
  }

  selectBookItem(id: string): Observable<any> {
    // return the selfLink
    return (this.http.get(
      'https://www.googleapis.com/books/v1/volumes/' + id));
  }

}

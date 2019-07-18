import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GbooksApiService {

  books = null;

  constructor(private http: HttpClient) {
    const bookParams = new HttpParams().set('q', 'Guillaume+Musso');

    http.get('https://www.googleapis.com/books/v1/volumes', { params: bookParams }).subscribe((apiData) => {
      console.log('-------GBOOKS API REQUEST---------');
      console.log(apiData.items);
      this.books = apiData.items;
    });
  }
}

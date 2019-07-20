import { Component, OnInit } from '@angular/core';
import { GbooksApiService } from '../../services/gbooks-api.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  userQuery        = null;
  userQueryResults = null;
  attribute;

  constructor(private gbooksApiService: GbooksApiService,
              private storage: LocalStorageService) { }

  ngOnInit() { }

  // API queries Methods
  query() {
    this.gbooksApiService.queryApi(this.userQuery).subscribe((apiData) => {
      console.log(apiData);
      this.userQueryResults = apiData;
      this.storage.store('boundValue', apiData);
    }, (error) => {
      console.error(error);
    });
  }

  showMoreBooks() {
    const currentLength = this.userQueryResults.items.length;

    this.gbooksApiService.queryApi(this.userQuery, currentLength).subscribe((apiData) => {
      console.log(apiData);
      this.userQueryResults.items.push(...apiData.items);
    }, (error) => {
      console.error(error);
    });
  }

  // LocalStorage Methods

  // trigger when saving to cart!
  saveToLocalStorage() {
    this.storage.store('boundValue', this.attribute);
    console.log(this.attribute);
  }

  // trigger when starting the app
  retrieveFromLocalStorage() {
    this.userQueryResults = this.storage.retrieve('boundValue');
    this.attribute = this.storage.retrieve('boundValue');
    console.log(this.attribute);
  }

  // offer the possibility on Cart component
  clearLocalStorage() {
    this.storage.clear('boundValue');
  }
}

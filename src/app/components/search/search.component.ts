import { Component, OnInit } from '@angular/core';
import { GbooksApiService } from "../../services/gbooks-api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  titleQuery       = '';
  authorQuery      = '';
  isbnQuery        = '';
  userQueryResults = null;
  constructor(private gbooksApiService: GbooksApiService) { }

  ngOnInit() { }

  sendApiQuery() {
    this.gbooksApiService.queryApi(this.titleQuery, this.authorQuery, this.isbnQuery).subscribe((apiData) => {
      console.log(apiData);
      this.userQueryResults = apiData;
    }, (error) => {
      console.error(error);
    });
  }

  showMoreResults() {
    const currentLength = this.userQueryResults.items.length;

    this.gbooksApiService.queryApi(this.titleQuery, this.authorQuery, this.isbnQuery, currentLength).subscribe((apiData) => {
      console.log(apiData);
      this.userQueryResults.items.push(...apiData.items);
    }, (error) => {
      console.error(error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { GbooksApiService } from "../../services/gbooks-api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  userQuery        = null;
  userQueryResults = null;

  constructor(private gbooksApiService: GbooksApiService) { }

  ngOnInit() { }

  query() {
    this.gbooksApiService.queryApi(this.userQuery).subscribe((apiData) => {
      console.log(apiData);
      this.userQueryResults = apiData;
    }, (error) => {
      console.error(error);
    });
  }

  showMore() {
    const currentLength = this.userQueryResults.items.length;

    this.gbooksApiService.queryApi(this.userQuery, currentLength).subscribe((apiData) => {
      console.log(apiData);
      this.userQueryResults.items.push(...apiData.items);
    }, (error) => {
      console.error(error);
    });
  }
}

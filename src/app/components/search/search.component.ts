import { Component, OnInit } from '@angular/core';
import { GbooksApiService } from "../../services/gbooks-api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(private gbooksApiService: GbooksApiService) { }

  ngOnInit() {
  }

}

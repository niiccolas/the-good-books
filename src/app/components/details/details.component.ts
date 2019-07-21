import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GbooksApiService } from 'src/app/services/gbooks-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  public id:string = '';
  public book: any = null;


  constructor(private route: ActivatedRoute, private gbooksApiService: GbooksApiService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.id = params.id;
      // récupérer la requête
      this.gbooksApiService.selectBookItem(params.id).subscribe((data: any) => {
        this.book = data;
      })
      
    })
  }

}

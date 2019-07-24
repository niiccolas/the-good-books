import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-http-error',
  templateUrl: './http-error.component.html',
  styleUrls: ['./http-error.component.sass']
})
export class HttpErrorComponent implements OnInit {

  public code: number = 0;
  public message: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.code = data.code;
      this.message = data.message;
      });
  }
}

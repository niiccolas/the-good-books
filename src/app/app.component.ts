import { Component } from '@angular/core';
import { GbooksApiService } from './services/gbooks-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'the-good-books';

  constructor(private gbooksApiService: GbooksApiService) { }
}

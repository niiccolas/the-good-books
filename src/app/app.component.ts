import { Component } from '@angular/core';
import { GbooksApiService } from './services/gbooks-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'the-good-books';
  loadedComponent = 'search';

  onNavigate(component: string) {
    this.loadedComponent = component;
  }

  constructor(private gbooksApiService: GbooksApiService) { }
}

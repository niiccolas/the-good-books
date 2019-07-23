import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { DetailsComponent } from './components/details/details.component';
import {
  CartComponent
} from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' }, 
  { path: 'search', component: SearchComponent },
  { path: 'detail/:id', component: DetailsComponent},
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

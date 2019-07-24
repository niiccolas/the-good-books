import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { HttpErrorComponent } from './components/http-error/http-error.component';


const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' }, 
  { path: 'search', component: SearchComponent },
  { path: 'detail/:id', component: DetailsComponent},
  { path: 'cart', component: CartComponent},
  { path: '**', component: HttpErrorComponent, data: {code: 404, message: 'Not Found'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path:'products' , component:AllProductsComponent},
  {path: 'cart' , component:CartComponent},
  {path: 'details' , component:DetailsComponent},
  
  {path:'**' , redirectTo:'products',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

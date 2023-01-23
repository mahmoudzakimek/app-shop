import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AuthGuard } from './services/auth.guard';
import { BodyyGuard } from './services/bodyy.guard';

const routes: Routes = [
  {path:'products' , component:AllProductsComponent  },
  {path: 'cart' , component:CartComponent},
  {path: 'details/:id' , component:DetailsComponent},
  {path: 'details/:id/edit' , component:EditProductComponent ,canActivate: [AuthGuard] ,canDeactivate :[BodyyGuard]},
  {path: 'details/0/add' , component:AddProductComponent},

  {path:'**' , redirectTo:'products',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

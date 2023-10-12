import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './commom-component/products/products.component';
import { CartpageComponent } from './commom-component/cartpage/cartpage.component';

const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'cart',component:CartpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

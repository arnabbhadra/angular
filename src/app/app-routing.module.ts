import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./module/product/component/product-list/product-list.component";
import { ProductComponent } from './module/product/component/product/product.component';
import {CreateProductComponent} from "./module/product/component/create-product/create-product.component";
import { PageNotFoundComponent } from './pageNotFound.component';
const routes: Routes = [ {path:'product',component:ProductComponent,pathMatch: 'full'},
                        {path:'products',component: ProductListComponent,pathMatch: 'full'},
                        {path:'createproduct',component:CreateProductComponent},
                        { path: '',   redirectTo: '/products', pathMatch: 'full' },
                        {path:'**',component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

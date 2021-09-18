import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './component/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './component/product/product.component';
import { RouterModule} from '@angular/router';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { HttpClientModule } from '@angular/common/http';
import { LimitedProductDirective } from './directives/limited-product.directive';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    CreateProductComponent,
    LimitedProductDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

  ],
  exports :[
    ProductListComponent
  ]
})
export class ProductModule { }

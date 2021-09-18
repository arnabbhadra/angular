import { Component, OnInit, Directive ,ElementRef } from '@angular/core';
import { Product } from "../../Product";
import { ProductService } from "../../service/product.service";
import { Router } from '@angular/router';

@Directive({
  selector: "[limitedProduct]"
})
export class LimitedProductDirective {
  constructor(private el: ElementRef) {
    //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
    this.el.nativeElement.style.backgroundColor= 'Red';
  }
}




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[]=[];
  searchkey: string;
  constructor(private productService: ProductService,private router: Router) {
    this.searchkey = '';
    
  }
  searchBasedOnKey() {

    let obseravable = this.productService.getProductBasedOnKey(this.searchkey);
    obseravable.subscribe((data)=>{
      console.log(data.data);
      this.productList =data.data;
    })
  }
  ngOnInit(): void {
    
    let obseravable=this.productService.getAllProductList()
    obseravable.subscribe((data)=>{
      console.log(data.data);
      this.productList =data.data;
    })
  
  }

  buttonClick(){
    this.router.navigateByUrl('/createproduct');
  }

}

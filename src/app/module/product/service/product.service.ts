import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable, OnInit } from '@angular/core';
import { ProductComponent } from '../component/product/product.component';
import { Product } from "./../Product";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  //productLists: Observable<Product[]>;
  productList: Product[] = [];
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
  }


  //@ts-ignore
  getAllProductList(): Observable<any>{
    
    let observer : Observable<any> =this.httpClient.get<any>("http://127.0.0.1:3000/products").pipe()
    return observer;

  }
  getProductBasedOnKey(key: string): Observable<any> {
    let observer : Observable<any> =this.httpClient.get<any>("http://127.0.0.1:3000/product",{params:{query:key}}).pipe()
    return observer;
  }
  getProductByName(name: string) {
    //@ts-ignore
    let observer : Observable<any> =this.httpClient.get<any>("http://127.0.0.1:3000/product",{params:{query:name}}).pipe()
    return observer;

  }
  createAProduct(product: Product) {

    return this.httpClient.post("http://127.0.0.1:3000/product",product);
  }


}

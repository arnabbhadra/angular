import { Component, OnInit } from '@angular/core';
import {Product} from "./../../Product";
import {ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: string='';
  price: number=0;
  quantity: number=0;
  productPic: number=0;

  constructor(private route: ActivatedRoute, private productService: ProductService) {


   }

  ngOnInit(): void {
    var id:string='';
    
    this.route.queryParams.subscribe((params) => {id=params['name']});
    
    let obseravable: any = this.productService.getProductBasedOnKey(id);
    //@ts-ignore
    obseravable.subscribe((product)=>{
    this.name = product.data[0].name;
    this.price = product.data[0].price;
    this.quantity = product.data[0].quantity;
    this.productPic = product.data[0].productPic;
    })
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from './../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  //@ts-ignore
  name: string;
  //@ts-ignore
  price: number;
  //@ts-ignore
  quantity: number;
  //@ts-ignore
  productPic: string;
  //@ts-ignore
  limitedProduct: boolean;
  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {

  }
  createNewProduct(productForm: any) {
    console.log(productForm.value);
    this.name = productForm.value.name;
    this.price = productForm.value.price;
    this.quantity = productForm.value.quantity;
    this.productPic = productForm.value.productPic;
    this.limitedProduct = productForm.value.limitedProduct.toLowerCase() === 'true';
    let newproduct: Product = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      productPic: this.productPic,
      limitedProduct: this.limitedProduct
    }
    let observer = this.productService.createAProduct(newproduct);
    observer.subscribe((data) => {
      console.log(data);
    });
    this.router.navigateByUrl('/products');
  }
}

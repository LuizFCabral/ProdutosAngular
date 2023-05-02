import { ProductsService } from './../products.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.productService.getProduct().subscribe({
      next:(data)=>{
        this.products = data;
        console.log(this.products);
      },
      error:(err)=>{
        console.log("Error by getProduct: " + err);

      }
    });
  }
}

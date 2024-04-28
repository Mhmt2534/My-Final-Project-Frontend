import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductResponseModel } from '../../models/productResponseModel';
import { response } from 'express';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  dataLoaded = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
}

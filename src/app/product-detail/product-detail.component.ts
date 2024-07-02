import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { Product, productsList } from '../products/products.mock';
import { InProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product?: InProduct;
  loading: boolean = true;
  color: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService
          .getProductById(Number(params['productId']))
          .subscribe((data: InProduct) => {
            this.color =
              (this.product?.price as number) > 10000 ? 'rgb(21, 160, 6)' : '';
            this.product = data;
            this.loading = false;
            //console.log(this.product)
          });
      },
    });
  }
}


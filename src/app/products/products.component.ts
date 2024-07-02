import { Component, OnInit } from '@angular/core';
import { InProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  productList: InProduct[] = [];
 
  constructor(private _apiService: ApiService){}

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: InProduct[]) =>{
      //console.log(data)
      this.productList = data;
    })
  }
}

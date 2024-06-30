import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  productList: Product[] = productsList;
  loading: boolean = true;
  color: string = '';
  constructor(private _route: ActivatedRoute) {}

  //recibir a travez de la URL el id del producto
  ngOnInit(): void {
    //funcion para que se cargue en un segundo
    setTimeout(() => {
      this._route.params.subscribe((params) => {
        this.product = this.productList.find(
          (product) => product.id == params['productId']
        ); //tomar el objeto entero que coincida de la lista
        this.color =
          (this.product?.price as number) > 10000 ? 'rgb(21, 160, 6)' : '';
        this.loading = false;
        //console.log(this.product)
      });
    }, 500);
  }
}

import { HttpClient } from '@angular/common/http'; //inyección httpClient
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, InProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'https://fakestoreapi.com/products';
  constructor(private _httpClient: HttpClient) {}

  //métodos para obetener  los productos
  public getAllProducts(): Observable<InProduct[]> {
    return this._httpClient.get<InProduct[]>(this.baseURL);
  }

  public getProductById(id: number): Observable<InProduct> {
    return this._httpClient.get<InProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }
  public postProduct(product: InProduct): Observable<InProduct> {
    return this._httpClient.post<InProduct>(`${this.baseURL}`, product);
  }

  public updateProduct(id: number, product: InProduct): Observable<InProduct> {
    return this._httpClient.put<InProduct>(`${this.baseURL}/${id}`, product);
  }
  public deleteProduct(id: number): Observable<InProduct> {
    return this._httpClient.delete<InProduct>(`${this.baseURL}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http'; //inyección httpClient
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private baseURL='https://fakestoreapi.com/products'
  constructor(private _httpClient: HttpClient) { }

 //método para obetener todos los productos
  public getProducts(): Observable<InProduct>{
    return this._httpClient.get <Inproduct>(this.baseURL);
  }

}

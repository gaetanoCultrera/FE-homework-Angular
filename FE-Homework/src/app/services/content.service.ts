import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable,map } from 'rxjs';
import { ResponseContent } from 'src/modules/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient) { }

  favoriteList:ResponseContent[]=[]


  //all products by httpClient, output is an observable
  getProducts():Observable<ResponseContent[]>{
    return this.httpClient.get<ResponseContent[]>(`${environment.host}/products?offset=0&limit=24`)
  }

  // getProductsById(id:string | null):Observable<ResponseContent>{
  //   return this.httpClient.get<ResponseContent>(`${environment.host}/products/${id}`)
  // }

  AddFavorite(itemList:ResponseContent){
    this.favoriteList.push(itemList)
    console.log(this.favoriteList)
  }

  getFavorite() {
    return this.favoriteList;
  }

  // removeFavorite(id:string){
  //   let index=this.favoriteList.findIndex((item)=> item.id === id)
  //   this.favoriteList.splice(index,1)
  // }

  clearFavorite() {
    this.favoriteList = [];
    return this.favoriteList;
  }
}

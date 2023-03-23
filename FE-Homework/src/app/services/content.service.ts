import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { ResponseContent } from 'src/modules/content';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  //Array for the connection between components
  favoriteList: ResponseContent[] = [];

  //all products by httpClient, output is an observable
  getProducts(): Observable<ResponseContent[]> {
    return this.httpClient.get<ResponseContent[]>(
      `${environment.host}/products?offset=0&limit=24`
    );
  }

  //get an specific element by id
  getProductsById(id: string): Observable<ResponseContent> {
    return this.httpClient.get<ResponseContent>(
      `${environment.host}/products/${id}`
    );
  }

  addFavorite(product: ResponseContent): void {
    const index = this.favoriteList.findIndex(({ id }) => id === product.id);
    //The element will be added if the index is equal to -1.
    if (index !== -1) {
      this.toastr.error('Element already present');
    } else {
      this.favoriteList.push(product);
      this.toastr.success('Item inserted successfully');
    }
  }

  getFavorite(): ResponseContent[] {
    return this.favoriteList;
  }
}

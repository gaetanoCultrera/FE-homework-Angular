import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseContent } from 'src/modules/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient) { }


  getProducts():Observable<ResponseContent>{
    return this.httpClient.get<ResponseContent>(`${environment.host}/products`)
  }
}

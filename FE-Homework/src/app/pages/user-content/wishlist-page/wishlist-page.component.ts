import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { ResponseContent } from 'src/modules/content';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent implements OnInit {

  id:string | null="";
  favoriteProducts:ResponseContent[]=[]

  constructor(private _router: Router,private contentService:ContentService){}

  async ngOnInit(){
    this.setFavorite()
  }

  setFavorite():ResponseContent[]{
    return this.favoriteProducts=this.contentService.getFavorite()
  }

  // removeFavorite(id:string):void{
  //   this.contentService.removeFavorite(id)
  // }

  clearFavorite(){
    this.contentService.clearFavorite()
    this._router.navigate(['feed'])
  }



}

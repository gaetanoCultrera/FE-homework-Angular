import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { ResponseContent } from 'src/modules/content';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss'],
})
export class WishlistPageComponent implements OnInit {
  id: string | null = '';
  favoriteProducts: ResponseContent[] = [];

  constructor(
    private contentService: ContentService,
  ) {}

  async ngOnInit() {
    this.setFavoriteList();
  }

  setFavoriteList(): ResponseContent[] {
    return (this.favoriteProducts = this.contentService.getFavorite());
  }

  removeFavorite(id: string):void {
    this.contentService.removeFavorite(id)
  }

  // clearFavorite() {
  //   this.favoriteProducts = [];
  //   this.toastr.success('Items successfully removed');
  //   this._router.navigate(['feed']);
  // }
}

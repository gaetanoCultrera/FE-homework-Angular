import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private _router: Router,
    private contentService: ContentService,
    private toastr: ToastrService
  ) {}

  async ngOnInit() {
    this.setFavoriteList();
  }

  setFavoriteList(): ResponseContent[] {
    return (this.favoriteProducts = this.contentService.getFavorite());
  }

  removeFavorite(id: string): void {
    try {
      let index = this.favoriteProducts.findIndex((item) => item.id === id);
      this.favoriteProducts.splice(index, 1);
      this.toastr.success('Item successfully removed');
    } catch (error) {
      console.log(error);
    }
  }

  // clearFavorite() {
  //   this.favoriteProducts = [];
  //   this.toastr.success('Items successfully removed');
  //   this._router.navigate(['feed']);
  // }
}

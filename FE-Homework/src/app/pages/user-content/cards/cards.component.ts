import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContentService } from 'src/app/services/content.service';
import { ResponseContent } from 'src/modules/content';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() dataProducts: ResponseContent[] = [];
  defaultPage: number = 1;
  itemsPerPage: number = 9;
  FavoriteList: ResponseContent[] = [];

  constructor(private contentService: ContentService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  async addFavorite(product: ResponseContent) {
    this.contentService.AddFavorite(product);
    this.toastr.success('Product added successfully');
  }
}

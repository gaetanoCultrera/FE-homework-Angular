import { Component, Input, OnInit } from '@angular/core';
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

  constructor(
    private contentService: ContentService,
  ) {}

  ngOnInit(): void {}

  async addFavorite(id: string) {
    try {
      this.contentService.getProductsById(id).subscribe((item) => {
        this.contentService.addFavorite(item);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

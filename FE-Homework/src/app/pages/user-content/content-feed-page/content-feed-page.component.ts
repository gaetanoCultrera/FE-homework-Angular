import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { ResponseContent } from 'src/modules/content';

@Component({
  selector: 'app-content-feed-page',
  templateUrl: './content-feed-page.component.html',
  styleUrls: ['./content-feed-page.component.scss'],
})
export class ContentFeedPageComponent implements OnInit {

  dataProduct: ResponseContent[] = [];

  constructor(private contentService:ContentService) {}


  ngOnInit(): void {
    this.contentService.getProducts().subscribe((result)=>{
      this.dataProduct=[...result]
    })
  }


}

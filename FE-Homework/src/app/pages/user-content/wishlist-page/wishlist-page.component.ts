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

  constructor(private route: ActivatedRoute,private contentService:ContentService){}

  async ngOnInit(): Promise<void> {
    this.getProductById()
  }

  async getProductById(){
    this.id=this.route.snapshot.paramMap.get('id')
    this.contentService.getProductsById(this.id).subscribe((result)=>{
      this.favoriteProducts.push(result)
    })
    console.log(this.favoriteProducts)
    return this.favoriteProducts

  }

}

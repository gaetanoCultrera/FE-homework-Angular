import { Component, Input, OnInit } from '@angular/core';
import { ResponseContent } from 'src/modules/content';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() dataProducts:ResponseContent[]=[]
  defaultPage:number=1;
  itemsPerPage:number=9;

  constructor(){}

  ngOnInit(): void {

  }

}

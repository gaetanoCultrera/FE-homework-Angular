import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-me-page',
  templateUrl: './content-me-page.component.html',
  styleUrls: ['./content-me-page.component.scss']
})
export class ContentMePageComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
      console.log("sono qua")
  }

}

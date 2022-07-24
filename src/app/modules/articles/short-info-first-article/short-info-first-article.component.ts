import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-short-info-first-article',
  templateUrl: './short-info-first-article.component.html',
  styleUrls: ['./short-info-first-article.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class ShortInfoFirstArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

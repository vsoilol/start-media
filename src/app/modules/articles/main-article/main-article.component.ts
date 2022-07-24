import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-main-article',
  templateUrl: './main-article.component.html',
  styleUrls: ['./main-article.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class MainArticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

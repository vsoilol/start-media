import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-gingerbreads-article',
  templateUrl: './gingerbreads-article.component.html',
  styleUrls: ['./gingerbreads-article.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class GingerbreadsArticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

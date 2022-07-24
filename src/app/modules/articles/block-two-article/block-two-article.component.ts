import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-block-two-article',
  templateUrl: './block-two-article.component.html',
  styleUrls: ['./block-two-article.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class BlockTwoArticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

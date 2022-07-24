import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-education-article',
  templateUrl: './education-article.component.html',
  styleUrls: ['./education-article.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class EducationArticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

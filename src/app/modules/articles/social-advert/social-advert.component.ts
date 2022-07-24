import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-social-advert',
  templateUrl: './social-advert.component.html',
  styleUrls: ['./social-advert.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class SocialAdvertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

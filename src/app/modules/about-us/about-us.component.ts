import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-how-to-create-media-content',
  templateUrl: './how-to-create-media-content.component.html',
  styleUrls: ['./how-to-create-media-content.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class HowToCreateMediaContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

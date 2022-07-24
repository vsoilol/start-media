import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-free-time-page',
  templateUrl: './free-time-page.component.html',
  styleUrls: ['./free-time-page.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class FreeTimePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

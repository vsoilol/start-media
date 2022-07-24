import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-day-photos',
  templateUrl: './day-photos.component.html',
  styleUrls: ['./day-photos.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class DayPhotosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

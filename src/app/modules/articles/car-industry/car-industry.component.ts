import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-car-industry',
  templateUrl: './car-industry.component.html',
  styleUrls: ['./car-industry.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class CarIndustryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

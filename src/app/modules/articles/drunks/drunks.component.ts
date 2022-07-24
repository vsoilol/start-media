import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-drunks',
  templateUrl: './drunks.component.html',
  styleUrls: ['./drunks.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class DrunksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

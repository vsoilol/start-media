import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-tactile-signs',
  templateUrl: './tactile-signs.component.html',
  styleUrls: ['./tactile-signs.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class TactileSignsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-quick-snacks',
  templateUrl: './quick-snacks.component.html',
  styleUrls: ['./quick-snacks.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class QuickSnacksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

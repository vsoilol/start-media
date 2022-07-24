import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-princess-children',
  templateUrl: './princess-children.component.html',
  styleUrls: ['./princess-children.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class PrincessChildrenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

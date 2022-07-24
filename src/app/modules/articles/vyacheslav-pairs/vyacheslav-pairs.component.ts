import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-vyacheslav-pairs',
  templateUrl: './vyacheslav-pairs.component.html',
  styleUrls: ['./vyacheslav-pairs.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class VyacheslavPairsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

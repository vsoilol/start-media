import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class PeoplePageComponent implements OnInit {
  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {}

  public redirectToPage(url: string) {
    this.router.navigate([`/${this.translate.currentLang}/${url}`]);
  }
}

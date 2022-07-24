import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { LogoService } from 'src/app/services/logo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  siteLanguage = 'Russian';
  languageList = [
    { code: 'ru', label: 'Russian' },
    { code: 'bel', label: 'Belarusian' },
  ];

  public logoSrc = '../../../assets/images/logo/ru.png';

  public isRussian: boolean = true;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private localize: LocalizeRouterService,
    public logoService: LogoService
  ) {}

  ngOnInit(): void {
    if (this.translate.currentLang === 'ru') {
      this.isRussian = true;
      this.logoService.logo = '../../../assets/images/logo/ru.png';
    } else {
      this.isRussian = false;
      this.logoService.logo = '../../../assets/images/logo/bel.png';
    }
  }

  public redirectToMainPage() {
    this.router.navigate([`/${this.translate.currentLang}/main-page`]);
  }

  // public redirectToNewsPage() {
  //   this.router.navigate(['/news-page']);
  // }

  changeSiteLanguage(): void {
    this.isRussian = !this.isRussian;

    let localeCode;

    if (this.isRussian) {
      localeCode = 'ru';
      this.logoService.logo = '../../../assets/images/logo/ru.png';
    } else {
      localeCode = 'bel';
      this.logoService.logo = '../../../assets/images/logo/bel.png';
    }

    this.localize.changeLanguage(
      this.localize.parser.currentLang === 'ru' ? 'bel' : 'ru',
      { replaceUrl: true }
    );

    this.translate.use(localeCode);

    const currentLanguage = this.translate.currentLang;
    console.log('currentLanguage', currentLanguage);
  }
}

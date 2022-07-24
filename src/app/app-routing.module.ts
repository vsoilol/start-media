import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';

import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';

import {
  LocalizeRouterModule,
  LocalizeParser,
  ManualParserLoader,
  CacheMechanism,
  LocalizeRouterSettings,
} from '@gilsdav/ngx-translate-router';

import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';

export function HttpLoaderFactory(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
  http: HttpClient
) {
  return new LocalizeRouterHttpLoader(
    translate,
    location,
    { ...settings, alwaysSetPrefix: true },
    http
  );
}

export function shouldTranslateMap(param: string): string {
  if (isNaN(+param)) {
    return 'map';
  }
  return null;
}

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'gay-vadim-vlad', component: MainPageComponent },
  {
    path: 'tactile-signs',
    loadChildren: () =>
      import('../app/modules/articles/tactile-signs/tactile-signs.module').then(
        (m) => m.TactileSignsModule
      ),
  },
  {
    path: 'drunks',
    loadChildren: () =>
      import('../app/modules/articles/drunks/drunks.module').then(
        (m) => m.DrunksModule
      ),
  },
  {
    path: 'car-industry',
    loadChildren: () =>
      import('../app/modules/articles/car-industry/car-industry.module').then(
        (m) => m.CarIndustryModule
      ),
  },
  {
    path: 'princess-children',
    loadChildren: () =>
      import(
        '../app/modules/articles/princess-children/princess-children.module'
      ).then((m) => m.PrincessChildrenModule),
  },
  {
    path: 'how-to-create-media-content',
    loadChildren: () =>
      import(
        '../app/modules/articles/how-to-create-media-content/how-to-create-media-content.module'
      ).then((m) => m.HowToCreateMediaContentModule),
  },
  {
    path: 'vyacheslav-pairs',
    loadChildren: () =>
      import(
        '../app/modules/articles/vyacheslav-pairs/vyacheslav-pairs.module'
      ).then((m) => m.VyacheslavPairsModule),
  },
  {
    path: 'quick-snacks',
    loadChildren: () =>
      import('../app/modules/articles/quick-snacks/quick-snacks.module').then(
        (m) => m.QuickSnacksModule
      ),
  },
  {
    path: 'main-article',
    loadChildren: () =>
      import('../app/modules/articles/main-article/main-article.module').then(
        (m) => m.MainArticleModule
      ),
  },
  {
    path: 'social-advert',
    loadChildren: () =>
      import('../app/modules/articles/social-advert/social-advert.module').then(
        (m) => m.SocialAdvertModule
      ),
  },
  {
    path: 'news-page',
    loadChildren: () =>
      import('../app/modules/news-page/news-page.module').then(
        (m) => m.NewsPageModule
      ),
  },
  {
    path: 'people-page',
    loadChildren: () =>
      import('../app/modules/people-page/people-page.module').then(
        (m) => m.PeoplePageModule
      ),
  },
  {
    path: 'free-time-page',
    loadChildren: () =>
      import('../app/modules/free-time-page/free-time-page.module').then(
        (m) => m.FreeTimePageModule
      ),
  },
  {
    path: 'block-two-article',
    loadChildren: () =>
      import(
        '../app/modules/articles/block-two-article/block-two-article.module'
      ).then((m) => m.BlockTwoArticleModule),
  },
  {
    path: 'archive',
    loadChildren: () =>
      import('../app/modules/archive/archive.module').then(
        (m) => m.ArchiveModule
      ),
  },
  {
    path: 'day-photos',
    loadChildren: () =>
      import('../app/modules/day-photos/day-photos.module').then(
        (m) => m.DayPhotosModule
      ),
  },
  {
    path: 'short-info-first-article',
    loadChildren: () =>
      import(
        '../app/modules/articles/short-info-first-article/short-info-first-article.module'
      ).then((m) => m.ShortInfoFirstArticleModule),
  },
  {
    path: 'gingerbreads-article',
    loadChildren: () =>
      import(
        '../app/modules/articles/gingerbreads-article/gingerbreads-article.module'
      ).then((m) => m.GingerbreadsArticleModule),
  },
  {
    path: 'education-article',
    loadChildren: () =>
      import(
        '../app/modules/articles/education-article/education-article.module'
      ).then((m) => m.EducationArticleModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('../app/modules/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: '**', redirectTo: '/main-page', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    LocalizeRouterModule.forRoot(routes, {
      // parser: {
      //     provide: LocalizeParser,
      //     useFactory: ManualLoaderFactory,
      //     deps: [TranslateService, Location, LocalizeRouterSettings]
      // },
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
      },
      cacheMechanism: CacheMechanism.Cookie,
      cookieFormat: '{{value}};{{expires:20}};path=/',
      // alwaysSetPrefix: false
      // initialNavigation: true
    }),
  ],
  exports: [RouterModule, LocalizeRouterModule],
})
export class AppRoutingModule {}

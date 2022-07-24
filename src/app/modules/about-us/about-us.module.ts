import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';

const routes: Routes = [{ path: '', component: AboutUsComponent }];

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    //MainImportsModule,
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
    AngularYandexMapsModule,
  ],
})
export class AboutUsModule {}

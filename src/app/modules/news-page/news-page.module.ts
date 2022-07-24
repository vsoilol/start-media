import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{ path: '', component: NewsPageComponent }];

@NgModule({
  declarations: [NewsPageComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
})
export class NewsPageModule {}

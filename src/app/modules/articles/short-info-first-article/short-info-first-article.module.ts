import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortInfoFirstArticleComponent } from './short-info-first-article.component';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{ path: '', component: ShortInfoFirstArticleComponent }];

@NgModule({
  declarations: [ShortInfoFirstArticleComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
})
export class ShortInfoFirstArticleModule {}

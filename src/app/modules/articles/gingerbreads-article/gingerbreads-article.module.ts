import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GingerbreadsArticleComponent } from './gingerbreads-article.component';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { EducationArticleComponent } from '../education-article/education-article.component';

const routes: Routes = [{ path: '', component: GingerbreadsArticleComponent }];

@NgModule({
  declarations: [GingerbreadsArticleComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
})
export class GingerbreadsArticleModule {}

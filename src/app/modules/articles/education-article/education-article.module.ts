import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationArticleComponent } from './education-article.component';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { ArchiveComponent } from '../../archive/archive.component';

const routes: Routes = [{ path: '', component: EducationArticleComponent }];

@NgModule({
  declarations: [EducationArticleComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
})
export class EducationArticleModule {}

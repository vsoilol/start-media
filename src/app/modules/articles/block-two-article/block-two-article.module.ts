import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockTwoArticleComponent } from './block-two-article.component';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{ path: '', component: BlockTwoArticleComponent }];

@NgModule({
  declarations: [BlockTwoArticleComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
})
export class BlockTwoArticleModule {}

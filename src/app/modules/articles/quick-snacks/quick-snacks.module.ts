import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickSnacksComponent } from './quick-snacks.component';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{ path: '', component: QuickSnacksComponent }];

@NgModule({
  declarations: [QuickSnacksComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
})
export class QuickSnacksModule {}

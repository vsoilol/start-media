import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrunksComponent } from './drunks.component';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{ path: '', component: DrunksComponent }];

@NgModule({
  declarations: [DrunksComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
})
export class DrunksModule {}

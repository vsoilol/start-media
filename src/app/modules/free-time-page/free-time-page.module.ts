import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeTimePageComponent } from './free-time-page.component';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{ path: '', component: FreeTimePageComponent }];

@NgModule({
  declarations: [FreeTimePageComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
})
export class FreeTimePageModule {}

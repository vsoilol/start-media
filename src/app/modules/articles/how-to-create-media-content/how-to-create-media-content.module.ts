import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowToCreateMediaContentComponent } from './how-to-create-media-content.component';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: '', component: HowToCreateMediaContentComponent },
];

@NgModule({
  declarations: [HowToCreateMediaContentComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
})
export class HowToCreateMediaContentModule {}

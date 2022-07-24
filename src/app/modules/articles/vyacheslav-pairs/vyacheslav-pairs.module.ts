import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VyacheslavPairsComponent } from './vyacheslav-pairs.component';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{ path: '', component: VyacheslavPairsComponent }];

@NgModule({
  declarations: [VyacheslavPairsComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
})
export class VyacheslavPairsModule {}

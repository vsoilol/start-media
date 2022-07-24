import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeoplePageComponent } from './people-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{ path: '', component: PeoplePageComponent }];

@NgModule({
  declarations: [PeoplePageComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
})
export class PeoplePageModule {}

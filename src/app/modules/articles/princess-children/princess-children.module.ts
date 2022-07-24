import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincessChildrenComponent } from './princess-children.component';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{ path: '', component: PrincessChildrenComponent }];

@NgModule({
  declarations: [PrincessChildrenComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
})
export class PrincessChildrenModule {}

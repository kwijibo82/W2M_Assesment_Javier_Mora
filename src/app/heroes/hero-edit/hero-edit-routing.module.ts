import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroEditComponent } from './hero-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HeroEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroEditRoutingModule {}

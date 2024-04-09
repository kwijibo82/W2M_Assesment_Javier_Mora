import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroCreateComponent } from './hero-create.component';

const routes: Routes = [
  {
    path: '',
    component: HeroCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroCreateRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', 
    loadChildren: () => import('./heroes/hero-list/hero-list.module').then(m => m.HeroListModule)},
  { path: 'edit-hero/:id',
    loadChildren: () => import('./heroes/hero-edit/hero-edit.module').then(m => m.HeroEditModule)
  },
  { path: 'create-hero', 
    loadChildren: () => import('./heroes/hero-create/hero-create.module').then(m => m.HeroCreateModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

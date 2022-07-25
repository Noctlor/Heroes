import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';

const routes : Routes=[
  {

    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {

    path:'heroes',
    loadChildren:()=> import('./heroes/heroes.module').then(h=>h.HeroesModule)
  },
  {
    path:'404',
    component:ErrorComponent
  },
  {
    path:'**',
    redirectTo:'heroes'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ApproutingModule { }

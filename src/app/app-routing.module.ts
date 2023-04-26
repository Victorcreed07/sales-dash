import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecondComponent} from '../components/second/second.component'
import {FirstComponent} from '../components/first/first.component'

const routes: Routes = [

{
  path:'',
  component:FirstComponent
},
{
  path:'second',
  component:SecondComponent
}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

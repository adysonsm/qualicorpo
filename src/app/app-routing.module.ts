import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlansComponent } from './componets/list-plans/list-plans.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'lista-de-planos', component : ListPlansComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


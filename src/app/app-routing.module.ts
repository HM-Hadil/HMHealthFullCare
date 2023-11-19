import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterPoidsComponent } from './services/consulter-poids/consulter-poids.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Home/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'consulterPoids',component: ConsulterPoidsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

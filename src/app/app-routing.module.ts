import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './Components/Articles/article.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    redirectTo:'/',
    pathMatch:'full'
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  }
]

@NgModule({
  declarations: [],
  imports:      [ RouterModule.forRoot(routes) ],
  exports:      [RouterModule]
})
export class AppRoutingModule { }

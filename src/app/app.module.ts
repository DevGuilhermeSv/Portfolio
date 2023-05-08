import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElementListComponent } from './Components/element-list/element-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ArticleLinkComponent } from './Components/article-link/article-link.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './Components/Articles/article.component';
import { HomeComponent } from './Components/home/home.component';
import { TopicsComponent } from './Components/topics/topics.component';
import { AticleService } from './Services/article.service';

@NgModule({
  declarations: [
    AppComponent,
    ElementListComponent,
    HeaderComponent,
    WelcomeComponent,
    ArticleLinkComponent,
    ArticleComponent,
    HomeComponent,
    TopicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  AticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

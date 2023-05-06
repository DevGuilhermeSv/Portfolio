import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElementListComponent } from './Components/element-list/element-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ArticleLinkComponent } from './Components/article-link/article-link.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './Components/Articles/article/article.component';
import { HomeComponent } from './Components/home/home.component';
import { TopicsComponent } from './Components/topics/topics.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
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
    HighlightModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js'),
      themePath: 'assets/styles/base16/dracula.css',
    }
  },
AticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElementListComponent } from './element-list/element-list.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticleLinkComponent } from './article-link/article-link.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementListComponent,
    HeaderComponent,
    WelcomeComponent,
    ArticleLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

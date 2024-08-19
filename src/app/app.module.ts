import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScrollViewComponent } from './scroll-view/scroll-view.component';
import { FooterComponent } from './footer/footer.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScrollViewComponent,
    FooterComponent,
    FirstpageComponent,
    SecondpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

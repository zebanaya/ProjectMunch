import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { EventsComponent } from './events/events.component';
import { FaqComponent } from './faq/faq.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent,
      EventsComponent,
      FaqComponent,
      SignupComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ScrollToModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

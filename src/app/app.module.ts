import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AnimatedIconComponent } from './animated-icon/animated-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AnimatedIconComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { DisplayContracterComponent } from './display-contracter/display-contracter.component';
import { DisplayMessageComponent } from './display-message/display-message.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DisplayContracterComponent,
    DisplayMessageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

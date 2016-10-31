import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { SpeechComponent } from './speech/speech.component';
import { TestobjComponent } from './testobj/testobj.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechComponent,
    TestobjComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: '[Your MAPS API KEYS]'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './jsPDF/app.component';
import { PdfMakerComponent } from './pdf-maker/pdf-maker.component';

import { PdfmakeService } from 'ng-pdf-make';
@NgModule({
  declarations: [
    AppComponent,
    PdfMakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PdfmakeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

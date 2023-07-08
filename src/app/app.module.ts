import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

// Configuracion del locale de la app
import localEsHN from "@angular/common/locales/es-HN";
import localFrCa from "@angular/common/locales/fr-CA"
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsHN)
registerLocaleData(localFrCa)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule
  ],
  providers: [
{    provide:LOCALE_ID,useValue:'es-HN'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }

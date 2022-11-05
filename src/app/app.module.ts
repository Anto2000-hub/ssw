import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TheaterComponent } from './theater/theater.component';
import { NotificaComponent } from './notifica/notifica.component';
import { NominativoComponent } from './nominativo/nominativo.component';
import { TheaterService } from './services/teatro.service';
import { NewtheaterComponent } from './newtheater/newtheater.component';

@NgModule({
  declarations: [
    AppComponent,
    TheaterComponent,
    NotificaComponent,
    NominativoComponent,
    NewtheaterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TheaterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
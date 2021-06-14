import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PanelModule} from 'primeng/panel';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CardModule} from 'primeng/card';
import { FootComponent } from './foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

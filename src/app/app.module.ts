import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PanelModule} from 'primeng/panel';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CardModule} from 'primeng/card';
import { FootComponent } from './foot/foot.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroVisitanteComponent } from './cadastro-visitante/cadastro-visitante.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {TooltipModule} from 'primeng/tooltip';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootComponent,
    CadastroVisitanteComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    CardModule,
    NgbModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

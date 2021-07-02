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
import { RouterModule } from '@angular/router';
import { CadastroVisitaComponent } from './cadastro-visita/cadastro-visita.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisitanteService } from './servicos/visitante.service';
import { VisitaService } from './servicos/visita.service';
import {PaginatorModule} from 'primeng/paginator';
import { Ng2SearchPipeModule } from "ng2-search-filter";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootComponent,
    CadastroVisitanteComponent,
    CadastroVisitaComponent,
    HomeComponent
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
    TooltipModule,
    InputTextareaModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    PaginatorModule,
    Ng2SearchPipeModule,

    RouterModule.forRoot([

      { path: '', component: HomeComponent},
      { path: 'cadastro-visitante', component: CadastroVisitanteComponent},
      { path: 'cadastro-visitante/:id', component: CadastroVisitanteComponent},
      { path: 'cadastro-visita', component: CadastroVisitaComponent},
      { path: 'cadastro-visita/:id', component: CadastroVisitaComponent}, 
    ])
  ],
  providers: [HttpClientModule, VisitanteService, VisitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

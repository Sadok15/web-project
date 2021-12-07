import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Acceuil/navbar/navbar.component';
import { FooterComponent } from './Acceuil/footer/footer.component';
import { AuthComponent } from './connexion/auth/auth.component';
import { InscriptionComponent } from './connexion/auth_inscription/inscription.component';
import { ListOpportuniteComponent } from './Candidat/Opportunite/list-opportunite/list-opportunite.component';
import { MesOpportuniteComponent } from './Candidat/Opportunite/mes-opportunite/mes-opportunite.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AuthComponent,
    InscriptionComponent,
    ListOpportuniteComponent,
    MesOpportuniteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingModule } from './app-routing.module';
import { AppBootstrapModule } from './app-bootstrap.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';

import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';
import { ProposalService } from './proposal/proposal.service';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    FormsModule,
    AppBootstrapModule,
    HttpClientModule
  ],
  providers: [DocumentService, ProposalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

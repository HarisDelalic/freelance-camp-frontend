import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'proposals', component: ProposalListComponent },
  { path: 'proposals/new', component: ProposalNewComponent },
  { path: 'proposals/:id', component: ProposalShowComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);


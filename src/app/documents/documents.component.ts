import { Component, OnInit } from '@angular/core';
import { Document } from './document';
import { DocumentService } from './document.service';
import { interval } from 'rxjs';

@Component({
	selector: 'documents',
	templateUrl: 'documents.component.html'
})

export class DocumentsComponent implements OnInit, OnDestroy {
  documents: Document[];
  sub: Subscription;

  private refreshInterval = interval(1000);

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.sub = this.refreshInterval.subscribe(()=> this.getDocuments());
  }

  getDocuments(): void {
    this.documentService.getDocuments()
      .subscribe(documents => this.documents = documents);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
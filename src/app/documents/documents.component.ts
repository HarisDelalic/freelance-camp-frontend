import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	selector: 'documents',
	templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = "Documents dashboard";
  documents: Document[] = [
    {
      title: "dela_title",
	  description: "dela_desc",
	  file_url: "dela.com",
	  updated_at: "11/11/16",
	  image_url: "dela.com",
    },
    {
      title: "dela_2_title",
	  description: "dela_2_desc",
	  file_url: "dela_2.com",
	  updated_at: "12/12/16",
	  image_url: "dela_2.com",
    }
  ]
}
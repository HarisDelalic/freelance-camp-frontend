import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { Document } from './document';

@Injectable()
export class DocumentService {
  private documentsUrl = 'http://localhost:3001/freelance_documents.json';

  constructor(
      private http: HttpClient
  	) {
  }

  getDocuments(): Observable<Document[]> {
  	return this.http.get<Document[]>(this.documentsUrl);
  }
}
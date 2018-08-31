import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/operators';

import { Proposal } from './proposal'

@Injectable()
export class ProposalService {
  private proposalsUrl: string = "http://localhost:3000/proposals";

  constructor(private http: HttpClient) {
  }

  getProposals(): Observable<Proposal[]> {
  	return this.http.get<Proposal[]>(this.proposalsUrl)
  }

  getProposal(id: number): Observable<Proposal> {
  	return this.http.get<Proposal>(this.proposalsUrl+"/"+id)
  }
}
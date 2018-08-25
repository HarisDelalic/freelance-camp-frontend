import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent { 
  proposalOne: Proposal = new Proposal(1, 'Dela company', 'http://portfolio.jordanhouse.com', 'Ruby on Rails', 1501, 121, 15, 'jordan@devcamp.com');
  proposalTwo: Proposal = new Proposal(2, 'Dela company_2', 'http://portfolio.jordanhouse.com', 'Ruby on Rails', 1502, 122, 15, 'jordan@devcamp.com');
  proposalThree: Proposal = new Proposal(3, 'Dela company_3', 'http://portfolio.jordanhouse.com', 'Ruby on Rails', 1503, 123, 15, 'jordan@devcamp.com');

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
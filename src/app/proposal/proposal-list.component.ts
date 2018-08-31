import { Component } from '@angular/core';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service'

@Component({
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent implements OnInit { 
  proposals: Proposal[];

  constructor(private proposalService: ProposalService) {
  }

  ngOnInit():void {
    this.getProposals()
  }

  getProposals(): void {
    return this.proposalService.getProposals()
      .subscribe(proposals => this.proposals = proposals)
  }

  goToShow(proposal: Proposal): void {
    let link = ['/proposal', proposal.id];
    this.router.navigate(link);
  }
}
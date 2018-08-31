import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { ProposalService } from './proposal.service';
import { mergeMap } from 'rxjs/operators';

@Component({
	selector: 'proposal-show',
	templateUrl: 'proposal-show.component.html'
})

export class ProposalShowComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private proposalService: ProposalService
	) {}

    @Input() 
    proposal: Proposal

	ngOnInit(): void {
		this.getProposal();
	}

	getProposal() {
		const id = +this.route.snapshot.paramMap.get('id');
		return this.proposalService.getProposal(id)
          .subscribe(proposal => this.proposal = proposal)
	}

}
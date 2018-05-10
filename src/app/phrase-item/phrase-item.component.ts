import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-phrase-item',
	templateUrl: './phrase-item.component.html',
	styleUrls: ['./phrase-item.component.css']
})
export class PhraseItemComponent implements OnInit {
	@Input() phrase: string;

	constructor() {}

	ngOnInit() {}
}

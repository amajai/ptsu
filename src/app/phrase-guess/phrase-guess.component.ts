import { Component, OnInit, Input } from '@angular/core';
import { getList } from './get-list';
import { EN_CURVED_BRANDS, EN_STRAIGHT_BRANDS } from './en-brands';

@Component({
	selector: 'app-phrase-guess',
	templateUrl: './phrase-guess.component.html',
	styleUrls: ['./phrase-guess.component.css']
})
export class PhraseGuessComponent implements OnInit {
	@Input() phrase: string;

	phraseList: string[];

	constructor() {}

	ngOnInit() {
		this.phraseList = getList(
			this.phrase,
			EN_CURVED_BRANDS,
			EN_STRAIGHT_BRANDS
		);
	}
}

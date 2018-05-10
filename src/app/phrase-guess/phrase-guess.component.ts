import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getList } from './get-list';
import { EN_CURVED_BRANDS, EN_STRAIGHT_BRANDS } from './en-brands';

@Component({
	selector: 'app-phrase-guess',
	templateUrl: './phrase-guess.component.html',
	styleUrls: ['./phrase-guess.component.css']
})
export class PhraseGuessComponent implements OnInit {
	@Output() next: EventEmitter<any> = new EventEmitter();
	@Input() phraseType: string;
	@Input() enteredPhrase: string;

	phraseList: string[];

	constructor() {}

	ngOnInit() {
		this.phraseList = getList(
			this.enteredPhrase,
			EN_CURVED_BRANDS,
			EN_STRAIGHT_BRANDS
		);
	}

	restart() {
		this.next.emit(null);
	}
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-phrase-entry',
	templateUrl: './phrase-entry.component.html',
	styleUrls: ['./phrase-entry.component.css']
})
export class PhraseEntryComponent implements OnInit {
	@Output() next: EventEmitter<any> = new EventEmitter();

	@Output() onPhrase = new EventEmitter<string>();
	@Input() phraseType = '';

	phrase: string;

	constructor() {}

	ngOnInit() {}

	submit() {
		this.phrase = this.phrase.trim();

		// starts with a letter
		if (this.phrase.match(/^[a-zA-Z]{1}.+$/)) {
			this.onPhrase.emit(this.phrase);
			this.next.emit(null);
		} else {
			alert('Enter a valid brand name');
		}
	}
}

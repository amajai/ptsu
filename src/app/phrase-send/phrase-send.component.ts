import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-phrase-send',
	templateUrl: './phrase-send.component.html',
	styleUrls: ['./phrase-send.component.css']
})
export class PhraseSendComponent implements OnInit {
	@Output() next: EventEmitter<any> = new EventEmitter();
	@Output() back: EventEmitter<any> = new EventEmitter();
	@Input() phrase: string;

	step = 0;
	constructor() {}

	ngOnInit() {}

	sendPhrase() {
		this.step = 1;
		setTimeout(() => {
			this.onPhraseSent();
		}, 3000);
	}

	onPhraseSent() {
		this.step = 2;
	}

	onContinue() {
		this.next.emit(null);
	}

	onBack() {
		this.back.emit(null);
	}
}

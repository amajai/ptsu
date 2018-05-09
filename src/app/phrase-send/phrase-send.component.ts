import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-phrase-send',
	templateUrl: './phrase-send.component.html',
	styleUrls: ['./phrase-send.component.css']
})
export class PhraseSendComponent implements OnInit {
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
}

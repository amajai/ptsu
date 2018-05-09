import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-phrase-send',
	templateUrl: './phrase-send.component.html',
	styleUrls: ['./phrase-send.component.css']
})
export class PhraseSendComponent implements OnInit {
	@Input() phrase: string;
	constructor() {}

	ngOnInit() {}
}

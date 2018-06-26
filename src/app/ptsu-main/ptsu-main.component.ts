import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ptsu-main',
	templateUrl: './ptsu-main.component.html',
	styleUrls: ['./ptsu-main.component.css']
})
export class PtsuMainComponent implements OnInit {
	title = 'app';
	step = 0;
	phrase: string;

	ngOnInit() {}

	next(): void {
		this.step++;
	}

	back(): void {
		this.step--;
	}

	onNewPhrase(phrase: string) {
		this.phrase = phrase;
	}
}

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	step = 0;
	phrase: string;

	next(): void {
		this.step++;
	}

	onNewPhrase(phrase: string) {
		this.phrase = phrase;
	}
}

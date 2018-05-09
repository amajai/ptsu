import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EN_INTRO_DIALOGUE } from './en-intro-dialogue';

@Component({
	selector: 'app-intro',
	templateUrl: './intro.component.html',
	styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
	@Output() next: EventEmitter<any> = new EventEmitter();

	dialogue = EN_INTRO_DIALOGUE;

	constructor() {}

	ngOnInit() {}

	onDone() {
		this.next.emit(null);
	}
}

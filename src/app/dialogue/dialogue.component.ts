import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-dialogue',
	templateUrl: './dialogue.component.html',
	styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
	@Output() done: EventEmitter<any> = new EventEmitter();

	@Input() prompts: string[];

	currentIndex = 0;

	constructor() {}

	ngOnInit() {}

	nextPrompt() {
		this.currentIndex++;
		if (this.currentIndex >= this.prompts.length) {
			this.done.emit(null);
		}
	}
}

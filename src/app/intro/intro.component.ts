import { Component, OnInit } from '@angular/core';
import { EN_INTRO_DIALOGUE } from './en-intro-dialogue';

@Component({
	selector: 'app-intro',
	templateUrl: './intro.component.html',
	styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
	dialogue = EN_INTRO_DIALOGUE;

	constructor() {
		console.log(this.dialogue);
	}

	ngOnInit() {}
}

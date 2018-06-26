import { Component, OnInit, Input } from '@angular/core';

import Typed from 'typed.js';

@Component({
	selector: 'app-typed-text',
	templateUrl: './typed-text.component.html',
	styleUrls: ['./typed-text.component.css']
})
export class TypedTextComponent implements OnInit {
	@Input() speed: number;
	@Input() delay: number;

	typed: any;

	constructor() {}
	ngOnInit() {}

	@Input()
	set typeText(text: string) {
		if (this.typed) {
			this.typed.destroy();
		}

		var options: any = {
			strings: [text]
		};

		if (this.speed) {
			options.typeSpeed = this.speed;
		}

		if (this.delay) {
			options.startDelay = this.delay;
		}

		this.typed = new Typed('#typed-text', options);
	}
}

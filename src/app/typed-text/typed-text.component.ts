import { Component, OnInit, Input } from '@angular/core';

import Typed from 'typed.js';

@Component({
	selector: 'app-typed-text',
	templateUrl: './typed-text.component.html',
	styleUrls: ['./typed-text.component.css']
})
export class TypedTextComponent implements OnInit {
	typed: any;

	constructor() {}

	ngOnInit() {}

	@Input()
	set typeText(text: string) {
		if (this.typed) {
			this.typed.destroy();
		}

		this.typed = new Typed('#typed-text', {
			strings: [text]
		});
	}
}

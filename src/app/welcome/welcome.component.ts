import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
	@Output() next: EventEmitter<any> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	onClickNext() {
		this.next.emit(null);
	}
}

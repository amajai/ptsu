import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseGuessComponent } from './phrase-guess.component';

describe('PhraseGuessComponent', () => {
	let component: PhraseGuessComponent;
	let fixture: ComponentFixture<PhraseGuessComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PhraseGuessComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PhraseGuessComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

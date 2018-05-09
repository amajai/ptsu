import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseSendComponent } from './phrase-send.component';

describe('PhraseSendComponent', () => {
	let component: PhraseSendComponent;
	let fixture: ComponentFixture<PhraseSendComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PhraseSendComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PhraseSendComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

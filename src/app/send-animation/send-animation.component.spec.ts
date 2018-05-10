import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAnimationComponent } from './send-animation.component';

describe('SendAnimationComponent', () => {
	let component: SendAnimationComponent;
	let fixture: ComponentFixture<SendAnimationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SendAnimationComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SendAnimationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

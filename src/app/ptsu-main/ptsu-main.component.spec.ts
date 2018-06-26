import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsuMainComponent } from './ptsu-main.component';

describe('PtsuMainComponent', () => {
	let component: PtsuMainComponent;
	let fixture: ComponentFixture<PtsuMainComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PtsuMainComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PtsuMainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

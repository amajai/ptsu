import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsuSecretComponent } from './ptsu-secret.component';

describe('PtsuSecretComponent', () => {
	let component: PtsuSecretComponent;
	let fixture: ComponentFixture<PtsuSecretComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PtsuSecretComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PtsuSecretComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

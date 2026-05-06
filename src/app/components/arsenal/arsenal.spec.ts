import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arsenal } from './arsenal';

describe('Arsenal', () => {
  let component: Arsenal;
  let fixture: ComponentFixture<Arsenal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arsenal],
    }).compileComponents();

    fixture = TestBed.createComponent(Arsenal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

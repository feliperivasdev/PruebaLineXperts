import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista } from './vista';

describe('Vista', () => {
  let component: Vista;
  let fixture: ComponentFixture<Vista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

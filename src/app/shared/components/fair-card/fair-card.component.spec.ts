import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairCardComponent } from './fair-card.component';

describe('FairCardComponent', () => {
  let component: FairCardComponent;
  let fixture: ComponentFixture<FairCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllYouNeedComponent } from './all-you-need.component';

describe('AllYouNeedComponent', () => {
  let component: AllYouNeedComponent;
  let fixture: ComponentFixture<AllYouNeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllYouNeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllYouNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerfullPsdComponent } from './powerfull-psd.component';

describe('PowerfullPsdComponent', () => {
  let component: PowerfullPsdComponent;
  let fixture: ComponentFixture<PowerfullPsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerfullPsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerfullPsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

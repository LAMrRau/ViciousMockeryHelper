import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InsulterComponent } from './insulter.component';

describe('InsulterComponent', () => {
  let component: InsulterComponent;
  let fixture: ComponentFixture<InsulterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InsulterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

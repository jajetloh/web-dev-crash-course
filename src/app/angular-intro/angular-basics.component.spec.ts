import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBasicsComponent } from './angular-basics.component';

describe('AngularIntroComponent', () => {
  let component: AngularBasicsComponent;
  let fixture: ComponentFixture<AngularBasicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularBasicsComponent]
    });
    fixture = TestBed.createComponent(AngularBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

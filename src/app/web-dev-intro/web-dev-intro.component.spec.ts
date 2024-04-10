import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevIntroComponent } from './web-dev-intro.component';

describe('TutorialComponent', () => {
  let component: WebDevIntroComponent;
  let fixture: ComponentFixture<WebDevIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebDevIntroComponent]
    });
    fixture = TestBed.createComponent(WebDevIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

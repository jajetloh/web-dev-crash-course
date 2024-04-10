import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAndGitHubPagesComponent } from './ng-and-git-hub-pages.component';

describe('NgAndGitHubPagesComponent', () => {
  let component: NgAndGitHubPagesComponent;
  let fixture: ComponentFixture<NgAndGitHubPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgAndGitHubPagesComponent]
    });
    fixture = TestBed.createComponent(NgAndGitHubPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

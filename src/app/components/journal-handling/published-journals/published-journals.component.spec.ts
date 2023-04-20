import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedJournalsComponent } from './published-journals.component';

describe('PublishedJournalsComponent', () => {
  let component: PublishedJournalsComponent;
  let fixture: ComponentFixture<PublishedJournalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedJournalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishedJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

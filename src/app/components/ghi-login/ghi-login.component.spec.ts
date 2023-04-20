import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhiLoginComponent } from './ghi-login.component';

describe('GhiLoginComponent', () => {
  let component: GhiLoginComponent;
  let fixture: ComponentFixture<GhiLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhiLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

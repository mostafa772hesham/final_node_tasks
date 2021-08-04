import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditenewsComponent } from './editenews.component';

describe('EditenewsComponent', () => {
  let component: EditenewsComponent;
  let fixture: ComponentFixture<EditenewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditenewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

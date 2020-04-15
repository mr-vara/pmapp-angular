import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTaskDetailsComponent } from './sub-task-details.component';

describe('SubTaskDetailsComponent', () => {
  let component: SubTaskDetailsComponent;
  let fixture: ComponentFixture<SubTaskDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTaskDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksUserlistComponent } from './works-userlist.component';

describe('WorksUserlistComponent', () => {
  let component: WorksUserlistComponent;
  let fixture: ComponentFixture<WorksUserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorksUserlistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

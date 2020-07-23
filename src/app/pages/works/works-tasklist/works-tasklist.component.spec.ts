import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksTasklistComponent } from './works-tasklist.component';

describe('WorksTasklistComponent', () => {
  let component: WorksTasklistComponent;
  let fixture: ComponentFixture<WorksTasklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorksTasklistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksTasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

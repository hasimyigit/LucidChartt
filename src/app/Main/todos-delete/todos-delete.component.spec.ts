import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDeleteComponent } from './todos-delete.component';

describe('TodosDeleteComponent', () => {
  let component: TodosDeleteComponent;
  let fixture: ComponentFixture<TodosDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

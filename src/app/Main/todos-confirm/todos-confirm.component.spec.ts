import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosConfirmComponent } from './todos-confirm.component';

describe('TodosConfirmComponent', () => {
  let component: TodosConfirmComponent;
  let fixture: ComponentFixture<TodosConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

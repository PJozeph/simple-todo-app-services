import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCompletedComponent } from './todo-completed.component';

describe('TodoCompletedComponent', () => {
  let component: TodoCompletedComponent;
  let fixture: ComponentFixture<TodoCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCompletedComponent]
    });
    fixture = TestBed.createComponent(TodoCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

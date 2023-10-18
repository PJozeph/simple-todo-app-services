import { Component } from '@angular/core';
import { TodoItem } from 'src/app/model/todo.model';
import { TodoItemService } from 'src/app/services/todo-item.service';

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.css']
})
export class TodoCompletedComponent {

  todoItems: TodoItem[] = [];

  constructor(private todoService: TodoItemService) {
  }

  ngOnInit(): void {
    this.todoService.getTodoItems().subscribe(items => {
        this.todoItems = items.filter(item => item.done);
    });
}


}

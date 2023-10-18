import { Component } from '@angular/core';
import { TodoItem } from 'src/app/model/todo.model';
import { TodoItemService } from 'src/app/services/todo-item.service';

@Component({
  selector: 'app-todo-analysis',
  templateUrl: './todo-analysis.component.html',
  styleUrls: ['./todo-analysis.component.css']
})
export class TodoAnalysisComponent {

  public todoItem : TodoItem [] = []

  constructor(private todoService: TodoItemService ) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.todoService.getTodoItems().subscribe(items => {
        this.todoItem = items;
    });
  }

}

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { TodoItem } from 'src/app/model/todo.model';
import { TodoItemService } from 'src/app/services/todo-item.service';
import { TodoInputComponent, TodoItemInput } from 'src/app/todo-input/todo-input.component';
import { Subscription } from 'rxjs';
import { TodoItemComponent } from 'src/app/todo-item/todo-item.component';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit, OnDestroy {
    todoItems: TodoItem[] = [];
    subscriptions: Subscription = new Subscription();

    @ViewChild(TodoInputComponent) inputComponent!: TodoInputComponent;

    constructor(private todoService: TodoItemService) {}

    ngOnInit(): void {
        console.log('ngOnInit');
        console.log(this.inputComponent);
        const sub: Subscription = this.todoService.getTodoItems().subscribe({
            next: (todo: TodoItem[]) => {
                console.log(todo);
                console.log('Your code ...');
                this.todoItems = todo;
            },
            error: e => {
                console.error(e);
            },

            complete() {
                console.log('is completed');
            },
        });
        this.subscriptions.add(sub);
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit')
        console.log(this.inputComponent);
      }
}

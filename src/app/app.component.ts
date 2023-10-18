import { Component } from '@angular/core';
import { TodoItem } from './model/todo.model';
import { TodoItemInput } from './todo-input/todo-input.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'simple-todo-app';

    todoItems: TodoItem[] = [
        {
            id: '1',
            name: 'Buy Milk',
            description: 'Go to the store and buy milk',
            done: false,
        },
        {
            id: '2',
            name: 'Buy Bread',
            description: 'Go to the store and buy bread',
            done: false,
        },
        {
            id: '3',
            name: 'Buy Eggs',
            description: 'Go to the store and buy eggs',
            done: false,
        },
    ];

    public onAdd(item: TodoItemInput) {
        this.todoItems.push({
            name: item.name,
            description: item.description,
            done: false,
            id: Math.random().toString(),
        });
    }

    public onComplete(id: string) {
        this.todoItems = this.todoItems.filter(item => item.id !== id);
    }

}

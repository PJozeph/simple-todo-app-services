import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../model/todo.model';

@Injectable({
    providedIn: 'root',
})
export class TodoItemService {
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
            done: true,
        },
    ];

    constructor(private httpClient: HttpClient) {}

    public getTodoItems(): Observable<TodoItem[]> {
        // this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
        let observable = new Observable<TodoItem[]>(subscriber => {
            setTimeout(() => {
                subscriber.next(this.todoItems);
                subscriber.complete();
            }, 30);
        });
        return observable;
    }

    // add todo
    public addTodoItem(item: TodoItem) {
        let observable = new Observable<TodoItem[]>(subscriber => {
            setTimeout(() => {
                console.log('addTodoItem');
                this.todoItems.push(item);
                subscriber.next(this.todoItems);
                subscriber.complete();
            }, 30);
        });
        return observable;
    }

    // delete todo
    public deleteTodoItem(id: string) {
        this.todoItems = this.todoItems.filter(item => item.id !== id);
    }

    // complete todo
    public completeTodoItem(id: string) {
        const todo: TodoItem = this.todoItems.filter(item => item.id === id)[0]; // find the todo item
        todo.done = true; // set the done property to true
        const idex = this.todoItems.findIndex(item => item.id === id); // find the index of the todo item
        this.todoItems[idex] = todo; // replace the todo item in the array
        let observable = new Observable<TodoItem[]>(subscriber => {
            setTimeout(() => {
                subscriber.next(this.todoItems);
                subscriber.complete();
            }, 30);
        });
        return observable;
    }
}

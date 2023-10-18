import { Component, EventEmitter, Input, Output, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TodoItemService } from '../services/todo-item.service';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnDestroy, OnInit, OnChanges {
    @Input() id: string = '';
    @Input() name: string = '';
    @Input() description: string = '';

    constructor(private todoService: TodoItemService) {}
    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges TodoItemComponent');
    }


    ngOnInit(): void {
        console.log('ngOnInit TodoItemComponent');
    }

    public onCompleteClick(id: string) {
        this.todoService.completeTodoItem(id).subscribe();
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy TodoItemComponent');
    }
}

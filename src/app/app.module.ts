import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.modeule';
import { HttpClientModule } from '@angular/common/http';
import { TodoAnalysisComponent } from './pages/todo-analysis/todo-analysis.component';
import { TodoCompletedComponent } from './pages/todo-completed/todo-completed.component';
import { TodoItemService } from './services/todo-item.service';

@NgModule({
    declarations: [AppComponent, TodoItemComponent, TodoInputComponent, TodoPageComponent, TodoAnalysisComponent, TodoCompletedComponent],
    imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule, HttpClientModule],
    providers: [TodoItemService],
    bootstrap: [AppComponent],
})
export class AppModule {}

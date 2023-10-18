import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAnalysisComponent } from './pages/todo-analysis/todo-analysis.component';
import { TodoCompletedComponent } from './pages/todo-completed/todo-completed.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

const routes: Routes = [
    {
        path: 'todo',
        component: TodoPageComponent,
    },
    {
        path: 'analysis',
        component: TodoAnalysisComponent,
    },
    {
        path: 'completed',
        component: TodoCompletedComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

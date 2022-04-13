import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodosComponent } from "src/app/todos/components/todos/todos.component";
import { HeaderComponent } from "src/app/todos/components/header/header.component";
import { TodosService } from "src/app/todos/services/todos.service";
import { MainComponent } from "src/app/todos/components/main/main.component";
import { CommonModule } from "@angular/common";
import { TodoComponent } from "src/app/todos/components/todo/todo.component";

const routes: Routes = [
    {
        path: '',
        component: TodosComponent,
    },
]

@NgModule({
    declarations: [
        TodosComponent,
        HeaderComponent,
        MainComponent,
        TodoComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        TodosService
    ],
})
export class TodosModule {}
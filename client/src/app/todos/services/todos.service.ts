import { Injectable } from "@angular/core";
import { BehaviorSubject, filter } from "rxjs";
import { FilterEnum } from "../types/filter.enum";
import { TodoInterface } from "../types/todo.interface";

@Injectable()
export class TodosService {
    todos$ = new BehaviorSubject<TodoInterface[]>([]);
    filters$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);

    // can get data from backend
    addTodo(text: string): void {
        const newTodo: TodoInterface = {
            text,
            isCompleted: false,
            id: Math.random().toString(16),
        };
        const updatedTodos = [...this.todos$.getValue(), newTodo];
        this.todos$.next(updatedTodos);
    }

    toggleAll(isCompleted: boolean): void {
        console.log('isCompleted', isCompleted);
        const updatedTodos = this.todos$.getValue().map((todo) => {
            return {
                ...todo,
                isCompleted
            };
        });
        this.todos$.next(updatedTodos);
    }

    changeFilter(filterName: FilterEnum): void {
        this.filters$.next(filterName);
    }

    changeTodos(id: string, text: string): void {
        const updatedTodos = this.todos$.getValue().map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo,
                    text,
                }
            }
            
            return todo
        });
        this.todos$.next(updatedTodos);
    }

    removeTodo(id: string): void {
        const updatedTodos = this.todos$
        .getValue()
        .filter((todo) => todo.id !== id);

        this.todos$.next(updatedTodos);
    }

    toggleTodo(id: string): void {
        const updatedTodos = this.todos$.getValue().map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                };
            }
            return todo;
        });
        this.todos$.next(updatedTodos);
    }
}
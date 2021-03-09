import { Todo } from "../models/Todo";

// TODO: how to keep track of todos in localstorage
export class todoStorage {
    public todos: Todo[] = []; // Beginnen met lege array v todos
    private storageKey: string = 'TODOS';


    constructor() {
        // Get localStorage
        const restoredTodos = localStorage.getItem(this.storageKey);
        // Zijn er todos > restoren, anders: lege array
        this.todos = restoredTodos ? JSON.parse(restoredTodos) : [];
    }

    private syncTodos() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
    }

    public addTodo(t: Todo): void {
        this.todos.push(t);
        this.syncTodos();
    }
}
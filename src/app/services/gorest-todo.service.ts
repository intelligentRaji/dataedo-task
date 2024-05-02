import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'

import { map, Observable } from 'rxjs'

import { TodoStatus } from '../enums/todo-status.enum'
import { Todo } from '../interfaces/todo.interface'
import { CONFIG } from '../tokens/api-path.token'

@Injectable({
  providedIn: 'root',
})
export class GorestTodoService {
  private readonly http = inject(HttpClient)
  private readonly path = `${inject(CONFIG).API_PUBLIC_PATH}/v2/todos`

  public getSecondPendingTodo(): Observable<Todo | null> {
    return this.getTodosByStatus(TodoStatus.PENDING).pipe(map(this.getTodoByIndex))
  }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.path)
  }

  public getTodosByStatus(status: TodoStatus): Observable<Todo[]> {
    return this.getTodos().pipe(map((todos) => todos.filter((todo) => todo.status === status)))
  }

  private getTodoByIndex(todos: Todo[], index: number): Todo | null {
    return todos.at(index) ?? null
  }
}

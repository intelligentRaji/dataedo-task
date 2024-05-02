import { TodoStatus } from '../enums/todo-status.enum'

export interface Todo {
  id: number
  user_id: number
  title: string
  due_on: string
  status: TodoStatus
}

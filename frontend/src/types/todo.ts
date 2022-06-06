export type TodoBody = {
  name: string;
  id?: string;
  status: TodoStatus;
};
export type TodoResponse = {
  todos: Array<TodoBody>;
};
export enum TodoStatus {
  NotStarted,
  Process,
}
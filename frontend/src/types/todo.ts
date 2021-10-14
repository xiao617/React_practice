export type TodoBody = {
    name: string;
    id: string;
    status: TodoStatus;
}
export enum TodoStatus {
    NotStarted,
    Process,
}
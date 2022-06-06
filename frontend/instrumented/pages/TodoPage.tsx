import React, { useState, useEffect, useRef } from 'react';
import './../index.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectUser, userBody, userLogin } from '../features/user/userSlice';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { TodoBody, TodoStatus } from '../types/todo';
import { confirmDialog } from 'primereact/confirmdialog';
import { NodeService } from '../services/NodeService';

export default function TodoPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [inputTodo, setInputTodo] = useState<string>('');
  const [todolist, setTodolist] = useState<Array<TodoBody>>([]);

  const nodeService = new NodeService();
  // const temArr: Array<TodoBody> = [
  //     {id: '1',name:'Mon.',status: TodoStatus.NotStarted},
  //     {id: '2',name:'Tue.',status:TodoStatus.NotStarted},
  //     {id: '3',name:'Wed.',status:TodoStatus.NotStarted},
  //     {id: '4',name:'Thur.',status:TodoStatus.NotStarted}
  // ];

  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    await nodeService.getTodo().then((res) => setTodolist(res.data.todos));
  };
  const createTodo = async () => {
    await nodeService
      .postTodo({ name: inputTodo, status: TodoStatus.NotStarted })
      .then((res) => setTodolist(res.data.todos));
  };
  const acceptUpdateStatus = async (todoObject: TodoBody) => {
    if (todoObject.id !== undefined) {
      await nodeService
        .putTodo({ id: todoObject.id, name: todoObject.name, status: TodoStatus.Process })
        .then((res) => setTodolist(res.data.todos));
    }

    console.log(todoObject);
  };
  const acceptDeleteTodo = async (todoObject: TodoBody) => {
    await nodeService.deleteTodo(todoObject).then((res) => setTodolist(res.data.todos));
    console.log(todoObject);
  };
  const rejectUpdateStatus = (todoObject: TodoBody) => {
    console.log(todoObject);
    console.log('Cancel update status');
  };
  const rejectDeleteTodo = (todoObject: TodoBody) => {
    console.log(todoObject);
    console.log('Cancel delete todo');
  };
  const confirmUpdateStatus = (todoObject: TodoBody) => {
    return confirmDialog({
      message: 'Do you want to process this todo item?',
      header: 'Process Todo',
      accept: () => acceptUpdateStatus(todoObject),
      reject: () => rejectUpdateStatus(todoObject),
    });
  };
  const confirmDeleteTodo = (todoObject: TodoBody) => {
    return confirmDialog({
      message: 'Do you want to Delete this todo item?',
      header: 'Delete Todo',
      accept: () => acceptDeleteTodo(todoObject),
      reject: () => rejectDeleteTodo(todoObject),
    });
  };
  const notStartTag = () => {
    return <Tag value="Not Started"></Tag>;
  };
  const processTag = () => {
    return <Tag value="Process" severity="warning"></Tag>;
  };
  const cardFooter = (todoObject: TodoBody) => {
    return (
      <span>
        <Button
          className="p-button-success p-m-1"
          label="Start"
          icon="pi pi-play"
          onClick={() => confirmUpdateStatus(todoObject)}
        />
        <Button
          className="p-button-danger p-m-1"
          label="Delete"
          icon="pi pi-trash"
          onClick={() => confirmDeleteTodo(todoObject)}
        />
      </span>
    );
  };
  const cardTemplate = (todoObject: TodoBody) => {
    return (
      <div className="p-d-flex p-m-1 p-col-6" key={todoObject.id} data-cy="cardTitle">
        <Card  title={todoObject.name} footer={cardFooter(todoObject)} >
          <div className="p-text-right">
            {todoObject.status === TodoStatus.NotStarted ? notStartTag() : processTag()}
          </div>
        </Card>
      </div>
    );
  };
  return (
    <>
      <h3>hello, {user.name}</h3>
      <div className="p-d-inline-flex p-mt-6">
        <div className="p-mb-2 p-m-1">
          <span className="p-float-label">
            <InputText
              id="inTodo"
              value={inputTodo}
              onChange={(e) => setInputTodo(e.target.value)}
              data-cy="todoInput"
            />
            <label htmlFor="inTodo">Create Todo </label>
          </span>
        </div>
        <div className="p-mb-2 p-m-1">
          <Button label="Submit" name="submission" id="main" role="button" data-cy="todoSubmit" onClick={() => createTodo()}></Button>
        </div>
      </div>
      <div className="p-mt-2">{todolist.map((e) => cardTemplate(e))}</div>
    </>
  );
}

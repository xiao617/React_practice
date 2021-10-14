import React,{useState,useEffect} from 'react';
import "./../index.css";
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button'; 
import {Card} from 'primereact/card';
import {Tag} from 'primereact/tag';
import { TodoBody ,TodoStatus} from '../types/todo';
import { confirmDialog } from 'primereact/confirmdialog'; 

export default function TodoPage(){
    const [inputTodo,setInputTodo] = useState<string>("");
    const [todolist,setTodolist] = useState<Array<TodoBody>>([]);
    const temArr: Array<TodoBody> = [
        {id: '1',name:'Mon.',status: TodoStatus.NotStarted},
        {id: '2',name:'Tue.',status:TodoStatus.NotStarted},
        {id: '3',name:'Wed.',status:TodoStatus.NotStarted},
        {id: '4',name:'Thur.',status:TodoStatus.NotStarted}
    ];
    const confirmUpdateStatus = () => {

    }
    const notStartTag = () => {
        return (<Tag value="Not Started"></Tag>);
    }
    const processTag = () => {
        return (<Tag value="Process" severity="warning"></Tag>);
    }
    const cardFooter = () => {
        return (<span>
            <Button className="p-button-success p-m-1" label="Start" icon="pi pi-play"/>
            <Button className="p-button-danger p-m-1" label="Delete" icon="pi pi-trash"/>
        </span>);
    }
    const cardTemplate = (todoObject: TodoBody) => {
        return (
        <div className="p-d-flex p-m-1 p-col-6">
            <Card title={todoObject.name} footer={cardFooter}>
                <div className="p-text-right" >
                {todoObject.status === TodoStatus.NotStarted?notStartTag():processTag()}
                </div>
                
            </Card>
        </div>
        );
    }
    return(
        <>
        <div className="p-d-inline-flex p-mt-6">
            <div className="p-mb-2 p-m-1">
                <span className="p-float-label">
                    <InputText id="inTodo" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)}/>
                    <label htmlFor="inTodo">Create Todo </label>
                </span>
            </div>
            <div className="p-mb-2 p-m-1">
                <Button label="Submit"></Button>
            </div>
        </div>
        <div className="p-mt-2">
            {temArr.map((e)=>(cardTemplate(e)))}
        </div>
        </>
    )
}
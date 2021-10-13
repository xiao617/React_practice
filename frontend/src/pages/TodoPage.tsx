import React,{useState,useEffect} from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/luna-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button'; 
import {Card} from 'primereact/card';
import { todoBody } from '../types/todoBody';

export default function TodoPage(){
    const [inputTodo,setInputTodo] = useState<string>("");
    const [todolist,setTodolist] = useState<Array<todoBody>>([]);
    const temArr: Array<todoBody> = [
        {id: '1',name:'Mon.'},
        {id: '2',name:'Tue.'},
        {id: '3',name:'Wed.'},
        {id: '4',name:'Thur.'}
    ];
    const cardTemplate = (todoObject: todoBody) => {
        return (
        <div className="p-m-1">
            <Card title={todoObject.name}>

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
        <div className="p-d-flex p-mt-2">
            {temArr.map((e)=>(cardTemplate(e)))}
        </div>
        </>
    )
}
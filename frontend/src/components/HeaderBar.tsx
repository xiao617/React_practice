import React from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/luna-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Menubar} from 'primereact/menubar';
import {Link} from 'react-router-dom';

export default function HeaderBar(){
    
    const items = [
        {
            label: "Home"
        },
        {
            label: 'Todo',
            url: '/todo'
        }
    ]
    return (
    <>
        <Menubar model={items} />
    </>);
}
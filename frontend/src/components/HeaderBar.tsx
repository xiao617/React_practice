import React from 'react';
import './../index.css';
import { Menubar } from 'primereact/menubar';
import { useHistory } from 'react-router-dom';

export default function HeaderBar() {
  let history = useHistory();

  const items = [
    {
      label: 'Home',
      command: () => history.push('/'),
    }
  ];
  return (
    <>
      <Menubar model={items} />
    </>
  );
}

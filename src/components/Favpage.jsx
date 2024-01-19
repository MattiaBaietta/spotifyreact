import React from 'react';
import { Songalbum } from "./Songalbum";

export function Favpage() {
  const keys = Object.keys(localStorage);

  const getItemFromLocalStorage = (id) => {
    const storedData = localStorage.getItem(id);
    return storedData ? JSON.parse(storedData) : null;
  };

  return (
    <div>
        <h1 className='text-white'>Brani Preferiti</h1>
      {keys.map((singolakey) => (
        <Songalbum key={singolakey} canzone={getItemFromLocalStorage(singolakey)} />
      ))}
    </div>
  );
}

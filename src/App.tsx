// Creates a React component.
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

function AA() {
  return <div>AA Path</div>
}

function BB() {
  return <div>BB Path</div>
}

export function App() {
  return <>
      <div>Hello World, here is your path</div>
      <Routes>
        <Route path="/www/" element={<AA />}/>
        <Route path="/www/bb" element={<BB />}/>
      </Routes>
    </>
}
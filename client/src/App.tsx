import { Chat } from '@material-ui/icons';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/chat" element={<Chat />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

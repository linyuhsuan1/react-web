import React from 'react';
import Nav from './view/layout/Nav';
import './index.css';  // Tailwind CSS 必須引入檔案才能編譯
import {
    BrowserRouter as Router,

  } from "react-router-dom";
import AppRouter from './view/layout/appRoutes';

const App = () =>{
    return (
        <Router>
            <Nav />
            <AppRouter />
        </Router>
    )
}
export default App;

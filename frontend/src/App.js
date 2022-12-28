import React from 'react';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={ <Dashboard /> } />
                <Route exact path="/home" element={ <Home /> } />
                <Route exact path="/login" element={ <Login /> } />
            </Routes>
        </BrowserRouter>
    );
};
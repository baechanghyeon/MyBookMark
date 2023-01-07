import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Auth from '@/pages/Auth';
import NotFound from '@/components/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { getAllUsers } from '../../redux/actions';

import UserList from '../UserList/UserList';
import UserProfile from '../UserProfile/UserProfile';

import './App.css';

function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate replace to="/users" />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;

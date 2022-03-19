import React from 'react';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';

import UserList from '../UserList/UserList';
import UserProfile from '../UserProfile/UserProfile';

import './App.css';

function App() {
  return (
    <div className="App">
      App
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

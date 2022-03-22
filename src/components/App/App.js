import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getAllUsers } from '../../redux/actions';

import UserList from '../UserList/UserList';
import UserProfile from '../UserProfile/UserProfile';

import './App.scss';

function App(props) {

  const ghPagesUrl = process.env.PUBLIC_URL;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path={ghPagesUrl + "/"} element={<Navigate replace to={ghPagesUrl + "/users"} />} />
        <Route path={ghPagesUrl + "/users"} element={<UserList />} />
        <Route path={ghPagesUrl + "/users/:id"} element={<UserProfile />} />
        <Route path={ghPagesUrl + "*"} element={<div className='app__not-found'>Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getAllUsers } from '../../redux/actions';

import UserList from '../UserList/UserList';
import UserProfile from '../UserProfile/UserProfile';

import './App.scss';

const ghPagesUrl = process.env.PUBLIC_URL;

function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path={ghPagesUrl + "/"} element={<Navigate replace to={ghPagesUrl + "/users"} />} />
        <Route path={ghPagesUrl + "/users"} element={<UserList />} />
        <Route path={ghPagesUrl + "/users/:id"} element={<UserProfile />} />
        <Route path={ghPagesUrl + "*"} element={<div className='app__not-found'><p>Page Not Found</p></div>} />
      </Routes>
    </div>
  );
};

export default App;

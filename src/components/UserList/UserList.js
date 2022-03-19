import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserSort from '../UserSort/UserSort';

import './UserList.css';

function UserList() {

    const navigate = useNavigate();

    return (
        <div className="user-list">
            <UserSort />
            <Link to='/users/1'>LINK</Link>
            <button onClick={() => navigate('/users/2')}>Click</button>
            UserList
        </div>
    );
}

export default UserList;
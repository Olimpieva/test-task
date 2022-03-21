import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import UserListItem from '../UserListItem/UserListItem';
import UserSort from '../UserSort/UserSort';

import './UserList.css';

function UserList() {

    const navigate = useNavigate();
    const allUsers = useSelector(state => state.users);

    return (
        <div className="user-list">

            <UserSort />
            <ul className='user-list__list'>
                {
                    allUsers.map((user) => {
                        console.log(user)
                        return (
                            <li className='user-list__item' key={user.id}>
                                <UserListItem
                                    userId={user.id}
                                    name={user.name}
                                    city={user.address?.city || 'Отсутствует'}
                                    company={user.company?.name || 'Отсутствует'}
                                />
                            </li>
                        );
                    })
                }
            </ul>
            <Link to='/users/1'>LINK</Link>
            <button onClick={() => navigate('/users/2')}>Click</button>
            UserList
        </div>
    );
}

export default UserList;
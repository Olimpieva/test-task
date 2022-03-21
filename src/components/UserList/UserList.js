import React from 'react';
import { useSelector } from 'react-redux';

import UserListItem from '../UserListItem/UserListItem';
import UserSort from '../UserSort/UserSort';

import './UserList.scss';

function UserList() {

    const allUsers = useSelector(state => state.users);

    return (
        <main className="user-list">
            <UserSort />
            <section className='user-list__content'>
                <h2 className='user-list__title'>Список пользователей</h2>
                <ul className='user-list__list'>
                    {allUsers.map((user) => {
                        return (
                            <li className='user-list__item' key={user.id}>
                                <UserListItem
                                    userId={user.id}
                                    name={user.name}
                                    city={user.address.city}
                                    company={user.company.name}
                                />
                            </li>
                        )
                    })}
                </ul>
                <span>Найдено {allUsers.length} пользователей</span>
            </section>
        </main>
    );
}

export default UserList;
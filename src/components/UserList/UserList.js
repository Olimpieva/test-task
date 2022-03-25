import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { usersShortInfoSelector } from '../../redux/selectors';
import UserListItem from '../UserListItem/UserListItem';
import UserSort from '../UserSort/UserSort';
import Preloader from '../Preloader/Preloader';

import './UserList.scss';

function UserList() {

    const [listSortType, setListSortType] = useState({ type: null });

    const { loading, error } = useSelector(state => state.users);
    const userList = useSelector(usersShortInfoSelector);

    const getSortUsers = useCallback(() => {
        let allUsers = userList;

        if (listSortType.type === 'city') {
            return allUsers.sort((a, b) => a.city.localeCompare(b.city));
        };

        if (listSortType.type === 'company') {
            return allUsers.sort((a, b) => a.name.localeCompare(b.name));
        };

        return allUsers;
    }, [listSortType, userList]);

    function handleSortUserList(event) {
        setListSortType({ type: event.target.id });
    };

    return (
        <main className="user-list">
            <UserSort onSort={handleSortUserList} />
            <section className='user-list__content'>
                <h2 className='user-list__title'>Список пользователей</h2>
                {loading ?
                    <Preloader />
                    :
                    <>
                        <ul className='user-list__list'>
                            {getSortUsers().map((user) => {
                                return (
                                    <li className='user-list__item' key={user.id}>
                                        <UserListItem user={user} />
                                    </li>
                                )
                            })}
                        </ul>
                        {!error && <span className='user-list__text'>Найдено {userList.length} пользователей</span>}
                    </>
                }
                <span className={`user-list__error ${error && 'user-list__error_shown'}`}>{error?.message}</span>
            </section>
        </main>
    );
};

export default UserList;
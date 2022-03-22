import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import UserListItem from '../UserListItem/UserListItem';
import UserSort from '../UserSort/UserSort';
import Preloader from '../Preloader/Preloader';

import './UserList.scss';

function UserList() {

    const [listSortType, setListSortType] = useState({ type: null });

    const { data, loading } = useSelector(state => state.users);

    const getSortUsers = useCallback(() => {
        let allUsers = data;

        if (listSortType.type === 'city') {
            return allUsers.sort((a, b) => a.address.city.localeCompare(b.address.city));
        };

        if (listSortType.type === 'company') {
            return allUsers.sort((a, b) => a.company.name.localeCompare(b.company.name));
        };

        return allUsers;
    }, [listSortType, data]);

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
                        <span className='user-list__text'>Найдено {data.length} пользователей</span>
                    </>
                }
            </section>
        </main>
    );
};

export default UserList;
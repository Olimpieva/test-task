import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';

import './UserListItem.scss';

const ghPagesUrl = process.env.PUBLIC_URL;

function UserListItem({ user }) {

    const { id: userId, name, city, company } = user;

    const navigate = useNavigate();

    function MoreButtonClickHandler() {
        navigate(`${ghPagesUrl}/users/${userId}`);
    };

    return (
        <ul className="user-short-info">
            <div className='user-short-info__container'>
                <li className='user-short-info__item'>
                    <h3 className='user-short-info__title'>ФИО:</h3>
                    <span className='user-short-info__description'>{name}</span>
                </li>

                <li className='user-short-info__item'>
                    <h3 className='user-short-info__title'>город:</h3>
                    <span className='user-short-info__description'>{city}</span>
                </li>

                <li className='user-short-info__item'>
                    <h3 className='user-short-info__title'>компания:</h3>
                    <span className='user-short-info__description'>{company}</span>
                </li>
            </div>
            <Button type='button' name='details' title='Подробнее' onClick={MoreButtonClickHandler} />
        </ul>
    );
};

export default UserListItem;
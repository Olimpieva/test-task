import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllUsers } from '../../redux/actions';
import UserSort from '../UserSort/UserSort';

import './UserListItem.css';

function UserListItem(props) {

    const { userId, name, city = 'undefind', company } = props;

    const navigate = useNavigate();

    return (
        <ul className="user-short-info">
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

            <button onClick={() => navigate(`/users/${userId}`)}>Подробнее</button>
        </ul>
    );
}

export default UserListItem;
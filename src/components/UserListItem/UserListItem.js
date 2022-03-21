import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

import './UserListItem.scss';

function UserListItem(props) {

    const { userId, name, city = 'undefind', company } = props;

    const navigate = useNavigate();

    function MoreButtonClickHandler() {
        navigate(`/users/${userId}`);
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
}

export default UserListItem;
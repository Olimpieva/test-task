import React from 'react';
import Button from '../Button/Button';

import './UserSort.scss';

function UserSort({ onSort }) {

    return (
        <section className="user-sort">
            <h2 className='user-sort__title'>Сортировка</h2>
            <Button type='button' name='sort' id='city' title='по городу' onClick={(event) => onSort(event)} />
            <Button type='button' name='sort' id='company' title='по компании' onClick={(event) => onSort(event)} />
        </section>
    );
};

export default UserSort;
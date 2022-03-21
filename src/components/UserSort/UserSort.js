import React from 'react';
import Button from '../Button/Button';

import './UserSort.scss';

function UserSort() {

    function handleSortUserList(event) {
        console.log(event)
    }

    return (
        <section className="user-sort">
            <h2 className='user-sort__title'>Сортировка</h2>
            <Button type='button' name='sort' title='по городу' onClick={handleSortUserList} />
            <Button type='button' name='sort' title='по компании' onClick={handleSortUserList} />
        </section>
    );
}

export default UserSort;
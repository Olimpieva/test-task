import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { emailValidationErrorMessages } from '../../utils/constans';
import { useFormWithValidation } from '../../utils/useFormWithValidation';
import InputField from '../inputField/InputField';
import UserSort from '../UserSort/UserSort';

import './UserProfile.css';

function UserProfile(props) {
    console.log('render')

    const { id: currentUserId } = useParams();

    const currentUser = useSelector(state => {
        return state.users.find(user => user.id === +currentUserId);
    });

    const initialState = {
        name: currentUser.name,
        username: currentUser.username,
        email: currentUser.email,
        street: currentUser.address.street,
        city: currentUser.address.city,
        zipcode: currentUser.address.zipcode,
        phone: currentUser.phone,
        website: currentUser.website,
        comment: '',
    };

    const { values, handleChange, errors, isFormValid, } = useFormWithValidation(
        { values: initialState, isFormValid: true },
        { email: emailValidationErrorMessages }
    );

    const [isEdited, setisEdited] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(values));
        setisEdited(false);
    }

    if (!currentUser) {
        console.log('Ya tut')
        return (
            <div>Preloader</div>
        )
    }

    return (
        <div className="user-profile">
            <UserSort />
            UserProfile
            <form className='user-profile__form' onSubmit={handleSubmit}>
                <h2>Профиль пользователя</h2>
                <button className='user-profile__button_edit'
                    type='button'
                    onClick={() => {
                        setisEdited(true);
                    }}
                >
                    Редактировать
                </button>
                <InputField
                    type="text"
                    name="name"
                    formName="user-profile"
                    title="Name"
                    minLength="2"
                    isEdited={isEdited}
                    required
                    value={values.name || ''}
                    onChange={handleChange}
                    error={errors.name}
                />
                <InputField
                    type="text"
                    name="username"
                    formName="user-profile"
                    title="User name"
                    minLength="2"
                    isEdited={isEdited}
                    required
                    value={values.username || ''}
                    onChange={handleChange}
                    error={errors.username}
                />
                <InputField
                    type="email"
                    name="email"
                    formName="user-profile"
                    title="E-mail"
                    minLength="3"
                    pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                    isEdited={isEdited}
                    required
                    value={values.email || ''}
                    onChange={handleChange}
                    error={errors.email}
                />
                <InputField
                    type="text"
                    name="street"
                    formName="user-profile"
                    title="Street"
                    isEdited={isEdited}
                    required
                    value={values.street || ''}
                    onChange={handleChange}
                    error={errors.street}
                />
                <InputField
                    type="text"
                    name="city"
                    formName="user-profile"
                    title="City"
                    isEdited={isEdited}
                    required
                    value={values.city || ''}
                    onChange={handleChange}
                    error={errors.city}
                />
                <InputField
                    type="text"
                    name="zipcode"
                    formName="user-profile"
                    title="Zip code"
                    minLength="1"
                    isEdited={isEdited}
                    required
                    value={values.zipcode || ''}
                    onChange={handleChange}
                    error={errors.zipcode}
                />
                <InputField
                    type="tel"
                    name="phone"
                    formName="user-profile"
                    title="Phone"
                    minLength="3"
                    isEdited={isEdited}
                    required
                    value={values.phone || ''}
                    onChange={handleChange}
                    error={errors.phone}
                />
                <InputField
                    type="text"
                    name="website"
                    formName="user-profile"
                    title="Website"
                    minLength="3"
                    isEdited={isEdited}
                    required
                    value={values.website || ''}
                    onChange={handleChange}
                    error={errors.website}
                />
                <fieldset className={`input-field-area user-profile__input-field-area`}>
                    <label className="input-field-area__caption" htmlFor='user-profile__input-field-area'>Comment</label>
                    <textarea className='input-field-area'
                        type="text"
                        name="comment"
                        minLength="3"
                        disabled={!isEdited}
                        value={values.comment || ''}
                        onChange={handleChange}
                    >
                    </textarea>
                </fieldset>

                <button className='user-profile__button_save' type='submit' disabled={!isEdited || !isFormValid}>Отправить</button>

            </form>
        </div>
    )

}

export default UserProfile;
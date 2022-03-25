import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { userProfilesSelector } from '../../redux/selectors';
import { emailValidationErrorMessages } from '../../utils/constants';
import { useFormWithValidation } from '../../utils/useFormWithValidation';
import Button from '../Button/Button';
import InputField from '../inputField/InputField';
import Preloader from '../Preloader/Preloader';
import UserSort from '../UserSort/UserSort';

import './UserProfile.scss';

const ghPagesUrl = process.env.PUBLIC_URL;

function UserProfile(props) {

    const { id: currentUserId } = useParams();
    const navigate = useNavigate();

    const currentUser = useSelector(userProfilesSelector)[currentUserId];

    const [isEdited, setisEdited] = useState(false);

    const { values, setValues, handleChange, errors, isFormValid, } = useFormWithValidation(
        undefined,
        { email: emailValidationErrorMessages }
    );

    useEffect(() => {
        const initialState = currentUser ? currentUser : {};
        setValues(initialState);
    }, [currentUser, setValues]);

    function editProfileButtonClick() {
        setisEdited(true);
    };

    const isUserDataChanged = useCallback(() => {

        for (const key in currentUser) {
            if (values[key] !== currentUser[key]) {
                return true;
            };
        };

        return false;
    }, [currentUser, values])

    const handleSubmit = (event) => {
        event.preventDefault();
        setisEdited(false);

        if (!isUserDataChanged()) {
            return;
        };

        console.log(JSON.stringify(values));
    };

    return (
        <div className="user-profile">
            <UserSort onSort={() => navigate(`${ghPagesUrl}/users`)} />
            <section className='user-profile__content'>
                <div className='user-profile__container'>
                    <h2 className='user-profile__title'>Профиль пользователя</h2>
                    <Button type='button' name='edit' title='Редактировать' onClick={editProfileButtonClick} />
                </div>
                {currentUser ?
                    <form className='user-profile__form' onSubmit={handleSubmit}>
                        <div className='user-profile__input-list'>
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
                            <fieldset className={`input-field user-profile__input-field-area`}>
                                <label className="input-field__caption" htmlFor='user-profile-comment'>Comment</label>
                                <textarea className='input-field__input input-field__input_area' id='user-profile-comment'
                                    type="text"
                                    name="comment"
                                    minLength="3"
                                    disabled={!isEdited}
                                    value={values.comment || ''}
                                    onChange={event => handleChange(event.target)}
                                >
                                </textarea>
                            </fieldset>
                        </div>
                        <button className='button button_submit' type='submit' disabled={!isEdited || !isFormValid}>Отправить</button>
                    </form>
                    :
                    <Preloader />
                }
            </section>
        </div>
    );
};

export default UserProfile;
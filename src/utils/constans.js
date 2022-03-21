export const MAIN_URL = 'https://jsonplaceholder.typicode.com/users';

export const GET_ALL_USERS = 'GET_ALL_USERS';

export const REQUEST = '_REQUEST';
export const SUCCESS = '_SUCCESS';
export const FAILURE = '_FAILURE';

export const defaultValidationErrorMessages = {
    valueMissing: () => 'Поле должно быть заполнено.',
    tooShort: ({ minLength }) => `Поле должно содержать минимум ${minLength} символ${minLength < 5 ? `а` : `ов`}`,
    patternMismatch: () => 'Поле заполнено некорректно.',
    typeMismatch: () => 'Поле заполнено некорректно.'
};

export const emailValidationErrorMessages = {
    patternMismatch: () => 'Поле должно содержать корректный адрес.',
    typeMismatch: () => 'Поле должно содержать корректный адрес.',
};
export const MAIN_URL = 'https://jsonplaceholder.typicode.com/users';

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

export const requestErrorMessages = {
    serverError: () => 'Internal server error. Try later.',
    otherError: ({ errorCode, action }) => `Sorry, an error ${errorCode} occurred while ${action}`,
};
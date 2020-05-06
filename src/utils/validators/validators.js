export const required = (value) => {
    if (value) {
        return undefined;
    } else {
        return 'Field is required';
    }
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length <= maxLength) {
        return undefined;
    } else {
        return `Length of field last than ${maxLength}  symbols`;
    }
};

export const minLengthCreator = (minLength) => (value) => {
    if (value.length >= minLength) {
        return undefined;
    } else {
        return `Length of field less than ${minLength}  symbols`;
    }
};
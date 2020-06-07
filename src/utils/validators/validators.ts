export type FieldvalidatorType = (value: string) => string | undefined

export const required: FieldvalidatorType = (value) => {
    if (value) {
        return undefined;
    } else {
        return 'Field is required';
    }
};

export const maxLengthCreator = (maxLength: number): FieldvalidatorType=> (value) => {
    if (value.length <= maxLength) {
        return undefined;
    } else {
        return `Length of field last than ${maxLength}  symbols`;
    }
};

export const minLengthCreator = (minLength: number): FieldvalidatorType => (value) => {
    if (value.length >= minLength) {
        return undefined;
    } else {
        return `Length of field less than ${minLength}  symbols`;
    }
};
export interface FormModel {
    label: string,
    key: string,
    value: string | boolean | number,
    type: string,
    required: boolean,
    validate?: Validation[],
    mask?: string
}

export enum Validation {
    required = 1,
}
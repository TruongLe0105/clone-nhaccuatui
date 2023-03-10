export interface FormType {
    onClose: () => void;
    onSwitch: () => void;
}

export interface InputType
    extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type: string;
    placeholder?: string;
    inputClass?: any;
    value?: string;
    checked?: boolean;
}

export interface buttonType {
    title: string;
    buttonClass?: any;
}

export interface Pagination {
    count?: any;
    limit?: any;
    page?: any;
}
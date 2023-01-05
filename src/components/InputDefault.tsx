import { FC } from "react";
import { InputType } from "./types";

const InputDefault: FC<InputType> = (props) => {
    const {
        name,
        type,
        placeholder,
        inputClass,
        value,
        checked,
        ...ortherProps
    } = props;

    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={inputClass ? inputClass : 'input'}
            value={value}
            checked={checked}
            {...ortherProps}
        />
    )
}

export default InputDefault;
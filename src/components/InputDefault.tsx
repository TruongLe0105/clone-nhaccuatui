import { InputType } from "./types";

const InputDefault = (props: InputType) => {
    const { name, type, placeholder } = props;

    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            className='input'
        />
    )
}

export default InputDefault;
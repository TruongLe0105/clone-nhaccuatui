import { buttonType } from "./types"

const ButtonDefault = ({
    title,
    buttonClass
}: buttonType) => {

    return (
        <button
            type='submit'
            className={buttonClass ? buttonClass : 'default-button'}
        >
            {title}
        </button>
    )
}

export default ButtonDefault;
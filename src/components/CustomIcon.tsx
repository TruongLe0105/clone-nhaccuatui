import { HiddenContentMain } from "./HiddenContent";

export const AddCloudIcon = ({ iconStyle }: any) => {

    return (
        <div className='icon-general'
            style={iconStyle}
        >
            <i className="fa-solid fa-cloud-arrow-down"></i>
            <HiddenContentMain content='Thêm vào cloud' />
        </div>
    )
}

export const DownIcon = ({ iconStyle }: any) => {

    return (
        <div className='icon-general'
            style={iconStyle}
        >
            <i className="fa-solid fa-download"></i>
            <HiddenContentMain content='Tải về' />
        </div>
    )
}

export const ShareIcon = ({ iconStyle }: any) => {

    return (
        <div className='icon-general'
            style={iconStyle}
        >
            <i className="fa-solid fa-share-nodes"></i>
            <HiddenContentMain content='Chia sẻ' />
        </div>
    )
}
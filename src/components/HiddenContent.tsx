import React from 'react'

export const HiddenContent = ({
    content
}: any) => {
    return (
        <div className='hidden-content'>
            {content}
        </div>
    )
}

export const HiddenContentMain = ({
    content
}: any) => {
    return (
        <div className='hidden-content-main'>
            {content}
        </div>
    )
}

export const LinkSong = ({ el }: any) => {

    return (
        <a href='' title={el.title} className='name-song'>{el.title}</a>
    )
};

export const LinkSingers = ({ el, index }: any) => {

    return (
        <div className='name-song'>
            {el.map((singer: any, index: number) => (
                <a key={index} href='' title={singer} className='singer-release'>{singer}</a>
            ))}
        </div>
    )
};
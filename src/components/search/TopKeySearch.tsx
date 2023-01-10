
const TopKeySearch = () => {

    const keywords = ['Bo Xì Bo', 'Mưa Cứ Rơi - MR.A, Wxrdie', 'Anh Có Muốn Chúng Mình Bỏ Nhau', 'Hơn Em Chỗ Nào', 'Hit Việt Quốc Dân'];

    return (
        <div className='key-search'>
            <h2>Top Từ Khóa</h2>
            <div className='flex wrapper-hashtag'>
                {keywords.map((key, index) => (
                    <div key={index} className='flex align-center justify-between hashtag'>
                        <span className='title-hashtag'>#{index + 1}</span>
                        <span>{key}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopKeySearch;
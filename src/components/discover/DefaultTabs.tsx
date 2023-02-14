
const DefaultTabs = ({
    data,
    currentTab,
    setCurrentTab,
    setActiveTabInside,
}: any) => {

    const handleClickTab = (index: number) => {
        setCurrentTab(index);
        setActiveTabInside && setActiveTabInside(0);
    }

    return (
        <div className='flex w-100 justify-center default-tabs'>
            {data.map((tab: string, index: number) => (
                <div
                    key={index}
                    className={currentTab === index ? 'active-tab tab' : 'tab'}
                    onClick={() => handleClickTab(index)}
                    style={{ margin: '0 1rem' }}
                >
                    <span>{tab}</span>
                </div>
            ))}

        </div>
    )
}

export default DefaultTabs;
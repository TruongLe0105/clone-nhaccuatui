
const DefaultTabs = ({
    data,
    currentTab,
    setCurrentTab,
    setActiveTabInside,
}: any) => {

    const handleClickTab = (index: number) => {
        setCurrentTab(index);
        setActiveTabInside(0);
    }

    return (
        <div className='flex w-100 justify-between default-tabs'>
            {data.map((tab: string, index: number) => (
                <div
                    key={index}
                    className={currentTab === index ? 'active-tab tab' : 'tab'}
                    onClick={() => handleClickTab(index)}
                >
                    <span>{tab}</span>
                </div>
            ))}

        </div>
    )
}

export default DefaultTabs;
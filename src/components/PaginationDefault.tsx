import { FC, useEffect, useState } from 'react'
import { Pagination } from './types'

const PaginationDefault: FC<Pagination> = (props) => {
    const { count, limit, page } = props;
    const [pageCount, setPageCount] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const average = Math.ceil(count / limit);
        const arr = [];
        for (let i = 1; i <= average; i++) {
            arr.push(i);
        }
        setPageCount(arr);
    }, [count, limit]);

    const handleClickPage = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <div className='pagination'>
            <i className="pointer fa-solid fa-chevron-left"></i>
            {pageCount.map((page: number) => (
                <span
                    className={currentPage === page ? 'page-number current-page' : 'page-number'}
                    key={page}
                    onClick={() => handleClickPage(page)}
                >{page}</span>
            ))}
            <i className="pointer fa-solid fa-chevron-right"></i>
        </div>
    )
}

export default PaginationDefault
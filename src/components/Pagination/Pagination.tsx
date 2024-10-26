import ReactPaginate from "react-paginate"
import s from './Pagination.module.scss'
import { create } from "zustand";
import { devtools } from 'zustand/middleware'


interface IPaginate{
    currentPage:number,
    limit:number,
    skip:number,
    searchValue:string,
    setCurrentPage: (val: number) => void, 
    setSkip: (val: number) => void,
    setSearchValue: (val: string) => void,
}




export const Paginate = create<IPaginate>()(devtools(
    (set,get) => ({
        currentPage: 1,
        limit: 9,
        skip: 0,
        searchValue: '',
        setCurrentPage: (val) => set({ currentPage: val }), 
        setSkip: (val) => set({ skip: val }), 
        setSearchValue: (val) => set({ searchValue: val}),
    })
))


interface IProps{
  currentPage:number,
  limit:number,
  totalCount:number,
  changePage:(num: number) => void
}


const Pagination = ({limit, currentPage, totalCount, changePage} : IProps) => {


   const pageCount = Math.ceil(totalCount / limit)

  return (
    <ReactPaginate
        className={s.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => changePage(event.selected + 1)}
        forcePage={currentPage -1 }
        pageCount={pageCount}
        previousLabel="<"
        marginPagesDisplayed={1}
    />
  )
}

export default Pagination
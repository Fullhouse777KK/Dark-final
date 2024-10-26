import s from './MainPage.module.scss'
import just from '../../assets/images/just.jpg'
import { getProducts } from '../../services/product'
import MainPageProduct from './MainPageProduct'
import { IProduct } from '../../services'
import Pagination, { Paginate } from '../Pagination/Pagination'
import { FormEvent, useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Search from '../Search/Search'


const MainPage = () => {
const location = useLocation()
const navigate = useNavigate()
const changePage = (num:number) => {
setCurrentPage(num)
setSkip(num * limit - limit)
if (currentPage <= 1){
  data.limit = itemsPerPage
}
}

  const { 
    currentPage,
    limit,
    skip,
    setSearchValue,
    searchValue,
    setCurrentPage,
    setSkip
  } = Paginate((state) => state)

useEffect(() => {
  
const params = new URLSearchParams(location.search)

setCurrentPage(Number(params.get('page')) || 1)
setSearchValue(params.get('search') || '')

}, [location.search])


useEffect(() => {
const params = new URLSearchParams()
setSkip(currentPage * limit - limit)
currentPage != 1 && params.set('page', currentPage.toString() )
searchValue && params.set('search', searchValue)
navigate(`?${decodeURIComponent(params.toString())}`)
}, [currentPage, searchValue])

const {data} = getProducts({search: searchValue, limit:limit, skip:skip}) 
const [itemsPerPage] = useState(12)
  return (
    <>
    <div className={s.search}><Search/></div>
    <div className={s.main}>
    <div className={s.main__grid}>
    {data && data.products.map((item:IProduct)=>(
      <MainPageProduct 
      key={item.id}
      {...item}
      />
    ))}
    </div>
    <div className={s.main__pagination}>
      {data &&
      <Pagination
      limit={limit}
      currentPage={currentPage}
      totalCount={data.total}
      changePage={changePage}
      />}
      </div>
    </div>
    </>
  )
}

export default MainPage
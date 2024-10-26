import { useLocation } from 'react-router-dom'
import s from './Search.module.scss'
import { FormEvent, useEffect, useState } from 'react'
import { Paginate } from '../Pagination/Pagination'

const Search = () => {

const location = useLocation()
const [search, setSearch] = useState('') 
const {setSearchValue, setCurrentPage} = Paginate((state) => state)
const submit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchValue(search)
    setCurrentPage(1)
  }
const reset = () => {
    setSearchValue('')
    setSearch('')
    }
useEffect(() => {
        const params = new URLSearchParams(location.search)
        const searchValue = params.get('search') || ''
        setSearch(searchValue)
      }, [location.search])



  return (
    <form  onSubmit={submit}className={s.search}>
                <div className={s.search_inp}>
                <input 
                autoFocus
                type="text"
                placeholder='Search...'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                />
                <a href=""  onClick={reset} className={s.search_inp_a}>X</a>
                </div>
                <button className={s.search_btn}>Search</button>
            </form>
  )
}

export default Search
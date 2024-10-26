import s from './MainPage.module.scss'
import { IProduct } from '../../services'
import { Link, useNavigate } from 'react-router-dom'


const MainPageProduct = (item:IProduct) => {
  return (
    <>
        <Link to={`/product/${item.id}`} className={s.main__grid_box}>
          <h2 className={s.main__grid_box_title}>{item.title}</h2>
          <img src={item.images} alt="" className={s.main__grid_box_img} />
          <h2 className={s.main__grid_box_descr}></h2>
          <div className={s.main__grid_box_price}><h3 className={s.main__grid_box_price_nodisc}>Price {item.price}$</h3><h3 className={s.main__grid_box_price_disc}> New price {item.discountPercentage}$</h3></div>
          <h3 className={s.main__grid_box_stock}>{item.stock} left in stock</h3>
          <button className={s.main__grid_box_button}>View</button>
        </Link>
    </>
  )
}

export default MainPageProduct
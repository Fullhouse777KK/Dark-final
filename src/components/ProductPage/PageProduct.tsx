import s from './PageProduct.module.scss'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../services/product'
import { Swiper, SwiperSlide } from 'swiper/react';
import back from '../../assets/images/left-arrow.png'
import star from '../../assets/images/star.png'
import flame from '../../assets/images/flames.png'

export const PageProduct = () => {

const params = useParams()
const { data } = getProductById(Number(params.id))
  return (
    <>
    {data ? (
      <div className={s.product}>
      <div className={s.product__top}>
        <div className={s.product__top_head}></div>
        <Link to="/"  className={s.product__top_back}><img className={s.product__top_back_img} src={back} alt="" /></Link>
        <h2 className={s.product__top_title}>{data.title}</h2>
        </div>
        <div className={s.product__mid}>
          <img src={data.images} alt="" className={s.product__mid_img} />
          </div>
     <div className={s.product__bot}>
      <h2 className={s.product__bot_info}>Information: </h2>
      <h2 className={s.product__bot_descr}>{data.description}</h2>
      <div className={s.product__bot_price}>
      <div className={s.product__bot_price_rating}> <h2 className={s.product__bot_price_rating_t}></h2>Rating: {data.rating} <img className={s.product__bot_price_rating_i} src={star} alt="" /></div> 
      <h2 className={s.product__bot_price_pr}>Original Price - {data.price}$</h2>
      <div className={s.product__bot_price_disc}><h2 className={s.product__bot_price_disc_te}>Price with discount - {data.discountPercentage}$</h2> <img className={s.product__bot_price_disc_im} src={flame} alt="" /></div>
      </div>
     </div>
      </div>

    ) : 'Загрузка...' }
    
    </>
  )
}


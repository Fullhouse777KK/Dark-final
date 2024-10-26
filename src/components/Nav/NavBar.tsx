import s from './NavBar.module.scss'
import sun from '../../assets/images/BlackSun.png'





const Navbar = () => {
  return (
    <>
    <div className={s.navbar}>
        <div className={s.navbar__left}>
            <a href='/' className={s.navbar__left_link}>Dark S<img src={sun} alt="#" className={s.navbar__left_link_img}/><span className={s.navbar__left_link_span}>__</span>N</a> 
        </div>
        <div className={s.navbar__right}></div>
    </div>
    </>
  )
}

export default Navbar

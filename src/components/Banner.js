import styles from "../components/Banner.module.css"

function Banner(){
  return(
    <div className={styles.banner_component}>
      <div className={styles.banner_title}></div>
      <div className={styles.banner_opacity}></div>
      <div className={styles.banner_logo}></div>
    </div>
  )
}

export default Banner;
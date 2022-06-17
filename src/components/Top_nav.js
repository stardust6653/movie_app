import styles from "./Top_nav.module.css";

function Top_nav(){
  return(
    <div className={styles.top_menu}>
      <nav>
        <a href="&">회원가입</a>
        <a href="&">고객센터</a>
        <a href="&">즐겨찾기</a>
        <a href="&">사이트맵</a>
      </nav>
    </div>
  )
};

export default Top_nav;


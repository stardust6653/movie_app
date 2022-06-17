import PropTypes from "prop-types";
import styles from "./Detail_Movie.module.css"

function Detail_Movie({id, coverImg, title, genres, rating, description}){
  return (
    <div>
      <img src={coverImg} alt={title}/>
      <h1>{title}</h1>
      <div>
        <span>평점 : {rating}</span><br/>
        <span>제작연도 : {genres}</span>
      </div>
      <p>간편줄거리 : {description}</p>
    </div>
  )
}

Detail_Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}

export default Detail_Movie;
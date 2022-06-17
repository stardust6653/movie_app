import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres, rating}){
  return(
    <div className={styles.component}>
      <div className={styles.movie}>
        <Link to={`/movie/${id}`}><img className={styles.cover} src={coverImg} alt={title}/></Link>
        <p className={styles.rating}>관람객 평점 : {rating}</p>
        <div className={styles.info_box}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.genres}>{genres}</p>
        </div>
      </div>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;

/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> */
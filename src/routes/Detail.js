import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail_Movie from "../components/Detail_Movie";
import styles from "./Detail.module.css";

function Detail(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])
  const {id} = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json)
    setMovies(json.data.movie);
    setLoading(false)
  }
  useEffect(() => {
    getMovie()
  }, [])

  return(
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Detail_Movie
            key={movies.id}
            id={movies.id}
            coverImg={movies.medium_cover_image}
            title={movies.title}
            rating={movies.rating}
            genres={movies.genres}
            description={movies.description_full}
          />
        </div>
      )}
    </div>
  )
}

export default Detail;
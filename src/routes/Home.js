import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Banner from "../components/Banner"
import Top_nav from "../components/Top_nav"

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  },[])
  console.log(movies)

  return(
    <div>
      <Top_nav />
      <Banner />
      <h3 className={styles.recommend}>당신을 위한 추천영화</h3>
      <div className={styles.container}>
        <hr/>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={styles.contents}>
            {movies.map((movie) => (
              <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
        )}
        <hr/>
      </div>
    </div>
  )
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function renderPosterCard(props: any) {
  const [movieInfo, index] = props;
  return (
    <div className="poster-card" key={index}>
      <img className="poster-img" src={movieInfo.Poster} alt="" />
      <Link
        to={`/detail/${movieInfo.imdbID}`}
        key={index}
      >
        <h4>{movieInfo.Title}</h4>
      </Link>
    </div>
  );
}

const MovieList = () => {
  const [movieList, setMovieList] = React.useState([]);
  async function fetchData() {
    const response = await fetch(
      'http://www.omdbapi.com/?s=harry&apikey=b686d1e0',
    );
    const convertedJson = await response.json();
    setMovieList(convertedJson.Search);
  }
  React.useEffect(() => {
    fetchData();
  },              []);

  return (
    <div className="movie-list">
      <section className="poster-card-list">
        {movieList.length !== 0 ?
          movieList.map((...movieData) =>
            renderPosterCard(movieData),
          )
          : <h2>...Loading</h2>
        }
      </section>
    </div>
  );
};

export { MovieList };
export default MovieList;

import React, { useEffect, useState } from 'react';
import getFilms from 'service/getFilmList';
import css from './Home.module.css';
import MovieList from '../components/MovieList';
import Loader from '../components/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFilms();
        setFilms(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className={css.header}>Trending today</h1>
      {isLoading ? <Loader /> : null}
      {error ? <h1>{error}</h1> : null}
      {!isLoading && !error && <MovieList movies={films} />}
    </div>
  );
};

export default Home;

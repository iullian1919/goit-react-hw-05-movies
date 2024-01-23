import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastItem from 'components/CastItem/CastItem';
import { getCasts } from 'service/getFilmList';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    getCasts(movieId)
      .then(data => {
        setCast(data.cast);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul
      className={css.cast_list}
      style={{ display: 'flex', flexWrap: 'wrap', gap: 15 }}
    >
      {cast.map(el => (
        <CastItem key={el.id} cast={el} />
      ))}
    </ul>
  );
};

export default Cast;

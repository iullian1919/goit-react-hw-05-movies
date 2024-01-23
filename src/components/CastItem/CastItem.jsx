import React from 'react';
import PropTypes from 'prop-types';
import css from './CastItem.module.css';

const CastItem = ({ cast }) => {
  const { name, character, profile_path: photo } = cast;
  const defaultPhoto =
    'https://usagif.com/wp-content/uploads/2021/4fh5wi/pepefrg-4.gif';

  return (
    <li style={{ maxWidth: 450 }}>
      <div className={css.thumb}>
        <img
          style={{ width: '250px' }}
          src={
            photo
              ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${photo}`
              : defaultPhoto
          }
          alt="cast"
        />
      </div>

      <h3>{name}</h3>
      <h3 className={css.character} title={character}>
        {character}
      </h3>
    </li>
  );
};

CastItem.propTypes = {
  cast: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }).isRequired,
};

export default CastItem;

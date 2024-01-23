import React from 'react';
import PropTypes from 'prop-types';
import css from './GenresItem.module.css';

const GenresItem = ({ name }) => {
  return <li className={css.item}>{name}</li>;
};

GenresItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GenresItem;

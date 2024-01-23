import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonBack = ({ location }) => {
  const backLinkHref = location?.state?.from ?? '/';
  return <Link to={backLinkHref}>back</Link>;
};

ButtonBack.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.string,
    }),
  }),
};

export default ButtonBack;

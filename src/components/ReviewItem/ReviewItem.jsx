import React from 'react';
import PropTypes from 'prop-types';

const ReviewItem = ({ review }) => {
  const { author, content } = review;
  return (
    <li style={{ marginBottom: '20px' }}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewItem;

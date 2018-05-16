import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ match }) => {
  return <div>포스트 {match.params.id}</div>;
};

Post.propTypes = {
  match: PropTypes.object,
};

export default Post;

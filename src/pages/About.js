import React from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Menu from 'components/Menu';

const About = ({ location, match }) => {
  // 현재 경로에 대한 정보, 쿼리에 대한 정보
  console.log(location);
  const query = queryString.parse(location.search);
  console.log(query);

  // 라우트 매칭에 대한 정보, params에 대한 정보
  console.log(match);

  const detail = query.detail === 'true';
  console.log(detail);

  return (
    <div>
      <Menu />
      <h2>About {match.params.name}</h2>
      {detail && 'detail: blahblah'}
    </div>
  );
};

About.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
};

export default About;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shortid from 'shortid';

import GuidesListItem from './GuidesListItem';

const Container = styled.div`
  flex: 0 0 33.3333%;
`;

const GuidesList = styled.ul`
  list-style: none;
  margin: 0 0 2em;
`;

const GuidesCategory = ({ category }) => (
  <Container>
    <h2>{category.name}</h2>
    <GuidesList>
      {category.guides.map(guide => (
        <GuidesListItem key={shortid.generate()} guide={guide}></GuidesListItem>
      ))}
    </GuidesList>
  </Container>
);

GuidesCategory.propTypes = {
  category: PropTypes.object.isRequired,
};

export default GuidesCategory;

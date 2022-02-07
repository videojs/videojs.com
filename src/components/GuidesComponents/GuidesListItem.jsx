import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from '../Link';

const GuidesListItem = ({ guide: { frontmatter, fields } }) => (
  <li>
    <Link to={fields.slug}>{frontmatter.title}</Link>
  </li>
);

GuidesListItem.propTypes = {
  guide: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default GuidesListItem;

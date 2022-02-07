import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from '../Link';

const GuidesPaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.media.medLarge`
    padding-left: 4.375em;
  `}
  margin-bottom: 3em;
`;

const GuidesPaginationButton = ({ className, children, to, ...props }) => {
  if (typeof to === 'string' && to.length) {
    return (
      <Link className={className} to={to} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled className={className} {...props}>
      {children}
    </button>
  );
};

GuidesPaginationButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

const StyledGuidesPaginationButton = styled(GuidesPaginationButton)`
  background-color: #fff;
  border: 0.1429em solid #000;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  padding: 1em;
  width: 12.8571em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:disabled {
    color: rgba(0, 0, 0, 0.3);
    border-color: #ebebeb;
  }
`;

const Arrow = styled.span`
  font-size: 2em;
  line-height: 1;
`;

const GuidesPagination = ({
  prevLink,
  prevLinkCaption,
  nextLink,
  nextLinkCaption
}) => (
  <GuidesPaginationWrapper>
    <StyledGuidesPaginationButton to={prevLink}>
      <Arrow>&lt;&nbsp;</Arrow>
      <span>{prevLinkCaption}</span>
    </StyledGuidesPaginationButton>
    <StyledGuidesPaginationButton to={nextLink}>
      <span>{nextLinkCaption}</span>
      <Arrow>&nbsp;&gt;</Arrow>
    </StyledGuidesPaginationButton>
  </GuidesPaginationWrapper>
);

GuidesPagination.propTypes = {
  prevLink: PropTypes.string,
  prevLinkCaption: PropTypes.string,
  nextLink: PropTypes.string,
  nextLinkCaption: PropTypes.string,
};

export default GuidesPagination;

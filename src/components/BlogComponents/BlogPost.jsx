import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';

import Link from '../Link';
import WithAutoLinkHeaders from '../WithAutoLinkHeaders';

const getAuthorProfile = githubUsername =>
  `https://github.com/${githubUsername}`;

const getAuthorAvatar = githubUsername =>
  `${getAuthorProfile(githubUsername)}.png?size=50`;

const Wrapper = styled.article`
  display: flex;
  margin-bottom: 6em;
  width: 100%;
`;

const AvatarCol = styled.div`
  flex: 0 1 auto;
  margin-right: 1.25em;
`;

const Avatar = styled.img`
  border-radius: 50%;
  display: block;
  width: 3.125em;
  height: 3.125em;
  min-width: 3.125em;
  min-height: 3.125em;
`;

const TextCol = styled.div`
  flex: 1 1 auto;
  max-width: calc(100% - 4.375em);
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #424242;
  font-size: 18px;
  font-weight: 300;
  height: 2.78em;
  margin-bottom: 1.5em;
`;

const Text = styled.div`
  h1 {
    font-size: 28px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1em;
  }

  p, ul {
    color: #424242;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.78;
    margin-bottom: 2em;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  blockquote {
    border-left: 0.25em solid #dfe2e5;
    padding: 0 1em;
  }

  .gatsby-highlight {
    margin-bottom: 2.25em;
  }
`;

const TitleLink = styled(Link)`
  color: #000;
`;

const BlogPost = ({ post: { frontmatter, code, fields } }) => (
  <Wrapper>
    <AvatarCol>
      <Link
        href={getAuthorProfile(frontmatter.author.github)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar src={getAuthorAvatar(frontmatter.author.github)} />
      </Link>
    </AvatarCol>
    <TextCol>
      <Meta>
        <span>{frontmatter.author.name}</span>
        <span>{frontmatter.date}</span>
      </Meta>
      <Text>
        <TitleLink to={fields.slug}><h1>{frontmatter.title}</h1></TitleLink>
        <WithAutoLinkHeaders basePath={fields.slug}>
          <MDXRenderer>{code.body}</MDXRenderer>
        </WithAutoLinkHeaders>
      </Text>
    </TextCol>
  </Wrapper>
);

export default BlogPost;

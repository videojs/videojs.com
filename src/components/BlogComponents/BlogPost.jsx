import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';

const getAuthorProfile = githubUsername =>
  `https://github.com/${githubUsername}`;

const getAuthorAvatar = githubUsername =>
  `${getAuthorProfile(githubUsername)}.png?size=50`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 6em;
`;

const AvatarCol = styled.div`
  flex-grow: 0;
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
  flex-grow: 1;
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

  p {
    color: #424242;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.78;
    margin-bottom: 2em;
  }

  .gatsby-highlight {
    margin-bottom: 2.25em;
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    margin-bottom: 4em;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const BlogPost = ({ post: { frontmatter, code  } }) => (
  <Wrapper>
    <AvatarCol>
      <a
        href={getAuthorProfile(frontmatter.author.github)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar src={getAuthorAvatar(frontmatter.author.github)} />
      </a>
    </AvatarCol>
    <TextCol>
      <Meta>
        <span>{frontmatter.author.name}</span>
        <span>{frontmatter.date}</span>
      </Meta>
      <Text>
        <h1>{frontmatter.title}</h1>
        <MDXRenderer>{code.body}</MDXRenderer>
      </Text>
    </TextCol>
  </Wrapper>
);

export default BlogPost;

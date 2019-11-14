# Videojs.com

This is the repo for the videojs.com website, including our blog. It uses the [Gatsby framework](https://gatsbyjs.org), so if you have questions about how things like the static rendering work, their documentation is a great place to start

## Blog

Blog posts are written using [mdx](https://mdxjs.com/), a flavor of Markdown that allows you to include React components. Writing a new blog post is done by adding a new `.mdx` file in [src/mdx-pages/blog](src/mdx-pages/blog) with the correct metadata at the top. Moving forward, consider naming the file starting with the date to make organization a little easier long term.

```markdown
---
title: This is an awesome post
tags:
  - news
  - stats
author:
  name: Matt McClure
  github: mmcc
alias:
  - post/wow-neat-what-a-post
date: 2040-01-01 00:00:00
---

Wow this is a really great post. Such thought leadership.
```

## Running it locally

Check out the repo locally, then npm install and off you go!

```
$ git checkout https://github.com/videojs/videojs.com
$ cd videojs.com
$ npm install
$ npm run develop
```

If all went according to plan, you should now be able to visit the website at http://localhost:8000

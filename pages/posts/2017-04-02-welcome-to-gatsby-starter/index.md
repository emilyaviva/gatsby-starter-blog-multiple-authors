---
title: "Welcome to the Multi-Author Blog Starter"
path: "/welcome-to-the-multi-author-blog-starter"
author: "Emily Kapor-Mater"
date: "2017-04-02"
---
This is a starter for [Gatsby](https://github.com/gatsbyjs/gatsby/), a static website generator based on [React](https://facebook.github.io/react/). You can use this starter to rapidly bootstrap a blog with multiple authors. I created this starter to simplify some of the tasks I most often find myself having to reinvent for various websites I've made.

## How it works

### Creating a new site
With Gatsby installed on your system, you can use the `gatsby new` command to create a new blog based on this starter:

```
$ gatsby new blog https://github.com/emilyaviva/gatsby-starter-blog-multiple-authors
```

I use [Yarn](https://yarnpng.org/), though you can stick with NPM if you like. Run the `yarn` command to get your `yarn.lock` all right and proper.

You'll want to change your `blogTitle` and `linkPrefix` in the `config.toml` file.

### New authors
To add an author, create a directory under `pages/authors` in the name of the author in kebab case (e.g. `pages/authors/john-smith`). That directory should contain a `bio.json` file that contains `name`, `email`, and `bio` properties. The author's avatar should live at `image.png` in the same directory. (Extending this to use JPEG files, or additional fields in the bio, etc. etc., are left as exercises to the dev.)

### New posts
Posts should be placed in the `pages/posts` directory. Each post should have its own subdirectory. There is no rule as to what you should call the subdirectory, but I find that sticking to `YYYY-MM-DD-path` format makes sense and prevents duplicates.

Each post's subdirectory should contain, at minimum, an `index.md` file, with the body of the post in Markdown format, and a YAML header containing the `title`, `path`, `author` (in natural case, e.g. `John Smith`), and `date` (in `YYYY-MM-DD`) format. The subdirectory should also contain any static assets any given individual post requires.

Adding features, e.g. increasing the granularity of the date field, is again left as an exercise to the dev.

### Styling
In this starter, all the styling lives in `stylesheets/main.scss`. Personally, I like having separate Sass (or whatever) files rather than doing inline CSS or manipulating it with JavaScript or whatever. Your tastes may vary.

### Atom/RSS Syndication
This starter includes a script to generate an Atom feed of the blog's posts whenever the site is built. The feed is exported to `atom.xml`. The script itself that generates the feed lives at `scripts/buildFeed.js` and is called as a special post-build task from `gatsby-node.js`.

## Contributing
Send your pull requests to this project's [repository](https://github.com/emilyaviva/gatsby-starter-blog-multiple-authors) on GitHub.

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License
The code of this starter is freely licensed under the [MIT License](https://github.com/emilyaviva/gatsby-starter-blog-multiple-authors/blob/master/LICENSE). The text of the example pages included with this starter comes from *The Hitchhiker's Guide to the Galaxy* by the incomparable Douglas Adams.

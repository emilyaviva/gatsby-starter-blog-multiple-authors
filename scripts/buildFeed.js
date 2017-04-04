var fs = require('fs')
var path = require('path')
var Feed = require('feed')
var parseDate = require('date-fns/parse')
var sortBy = require('lodash/sortBy')
var md = require('markdown-it')()
var fm = require('front-matter')

function buildFeed (pages, callback) {
  var feed = new Feed({
    title: 'Gatsby Blog With Multiple Authors',
    link: 'https://gatsby-starter-blog-multiple-authors.github.io',
    id: 'https://gatsby-starter-blog-multiple-authors.github.io',
    description: 'An example blog, written in Gatsby.js, supporting posts by multiple authors.',
    copyright: 'Copyright notice goes here. Some rights reserved, or not.'
  })
  // only include actual blog posts
  var posts = pages.filter(p => p.file.dirname.substr(0, 6) === 'posts/')
  var sortedPosts = sortBy(posts, p => p.data.date).reverse()
  sortedPosts.forEach(p => {
    feed.addItem({
      title: p.data.title,
      id: `${p.path}`,
      link: `https://gatsby-starter-blog-multiple-authors.github.io${p.data.path}`,
      content: md.render(
        fm(
          fs.readFileSync(
            path.join(__dirname, '..', 'pages', p.requirePath),
            'utf-8')
        ).body
      ),
      date: parseDate(p.data.date),
      image: null,
      author: [{
        name: p.data.author
      }]
    })
  })
  fs.writeFileSync(
    path.join(__dirname, '..', 'public', 'atom.xml'),
    feed.atom1()
  )
  // Next callback.
  callback()
}

module.exports = buildFeed

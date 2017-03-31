var buildFeed = require('./scripts/buildFeed')

exports.postBuild = (pages, callback) => {
  console.log('Building Atom feed')
  // Build RSS feed.
  buildFeed(pages, callback)
  // Next callback.
  callback()
}

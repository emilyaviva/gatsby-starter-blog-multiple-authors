var fs = require('fs')
var path = require('path')
var buildFeed = require('./scripts/buildFeed')

exports.postBuild = (pages, callback) => {
  console.log('Building Atom feed')
  // Build RSS feed.
  buildFeed(pages, callback)
  // Copy favicon.
  fs.copySync(path.join(__dirname, '/favicon'), path.join(__dirname, '/public/favicon'))
  // Next callback.
  callback()
}

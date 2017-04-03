import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import includes from 'lodash/includes'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import format from 'date-fns/format'
import excerptHtml from 'excerpt-html'

import '../stylesheets/main.scss'
import 'font-awesome/scss/font-awesome.scss'

class BlogIndex extends Component {
  static propTypes = {
    route: PropTypes.object
  }
  render () {
    const { route } = this.props
    const sortedPages = sortBy(route.pages, 'data.date').reverse()
    const visiblePages = sortedPages.filter(page => (
      (get(page, 'file.ext') === 'md' && !includes(page.path, '/404')) || get(page, 'data.date')
    ))
    return (
      <main className='BlogIndex'>
        <Helmet title={config.blogTitle} />
        <ul>
          {visiblePages.map(page => (
            <li key={page.path} className='card'>
              <Link to={prefixLink(page.path)}>
                <div className='stub-line'>
                  <div className='stub-left'>
                    {get(page, 'data.title', page.path)}
                  </div>
                  <div className='stub-right'>
                    <span>
                      {`by ${get(page, 'data.author')}`}
                    </span>
                    <span>
                      {format(get(page, 'data.date'), 'MMM D, YYYY')}
                    </span>
                  </div>
                </div>
              </Link>
              <div
                className='excerpt'
                dangerouslySetInnerHTML={{
                  __html: `${excerptHtml(get(page, 'data.body'), {
                    stripTags: false,
                    pruneLength: 300
                  })} …` }}
              />
              <div className='read-more'>
                <Link to={prefixLink(page.path)}>
                  Read more… <i className='fa fa-angle-double-right' aria-hidden='true' />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
    )
  }
}

export default BlogIndex

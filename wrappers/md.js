import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { config } from 'config'
import format from 'date-fns/format'
import kebabCase from 'lodash/kebabCase'
import findIndex from 'lodash/findIndex'
import Bio from '../components/Bio'

class MarkdownWrapper extends Component {
  static propTypes = {
    route: PropTypes.object
  }
  render () {
    const { route } = this.props
    const post = route.page.data
    // Did we 404? If so, short-circuit.
    if (route.page.file.name === '404') {
      return (
        <div className='markdown'>
          <main className='Error404'>
            <Helmet title={`${config.blogTitle} | Not Found`} />
            <article dangerouslySetInnerHTML={{ __html: post.body }} />
          </main>
        </div>
      )
    }

    // Get previous and next page data.
    const allPosts = route.pages.filter(p => !p.path.includes('404') && !p.path.includes('/authors') && p.requirePath !== 'index.js')

    // Build up previous and next post arrows.
    const currentPostIndex = findIndex(allPosts, { path: `${post.path}/` })
    let prevPostObject, nextPostObject, prevPostDiv, nextPostDiv
    if (allPosts.length === 1) {
      prevPostObject = null
      nextPostObject = null
    } else {
      if (currentPostIndex === 0) {
        prevPostObject = null
        nextPostObject = allPosts[currentPostIndex + 1]
      } else if ((currentPostIndex + 1) === allPosts.length) {
        prevPostObject = allPosts[currentPostIndex - 1]
        nextPostObject = null
      } else {
        prevPostObject = allPosts[currentPostIndex - 1]
        nextPostObject = allPosts[currentPostIndex + 1]
      }
    }
    prevPostDiv = <div className='prev-post'>
      {prevPostObject
        ? <span>
          <i className='fa fa-angle-double-left' aria-hidden='true' />
          {' Previous Post: '}
          <Link to={`${prevPostObject.data.path}/`}>
            {prevPostObject.data.title}
          </Link>
        </span>
        : <span>{'You’re at the first post!'}</span>
      }
    </div>
    nextPostDiv = <div className='next-post'>
      {nextPostObject
        ? <span>
          {'Next Post: '}
          <Link to={`${nextPostObject.data.path}/`}>
            {nextPostObject.data.title}
          </Link>
          {' '}
          <i className='fa fa-angle-double-right' aria-hidden='true' />
        </span>
        : <span>{'You’re at the most recent post!'}</span>
      }
    </div>

    return (
      <main className='BlogPost'>
        <Helmet title={`${config.blogTitle} | ${post.title}`} />
        <div className='card'>
          <section className='post-header'>
            <h1 className='title'>{post.title}</h1>
            <h5 className='date'>
              {format((post.date || new Date()), 'MMMM D, YYYY')}
            </h5>
            <Bio author={require(`../pages/authors/${kebabCase(post.author)}/bio`)} />
          </section>
          <article dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
        <section className='post-nav'>
          {prevPostDiv}
          {nextPostDiv}
        </section>
      </main>
    )
  }
}

export default MarkdownWrapper

import React from 'react'
import { Link } from 'react-router'

const FeedLink = () =>
  <div className='FeedLink'>
    <Link to='/feed.xml'>
      <i className='fa fa-rss' aria-hidden='true' />{' '}RSS Feed
    </Link>
  </div>

export default FeedLink

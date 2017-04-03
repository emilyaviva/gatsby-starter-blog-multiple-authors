import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const Footer = () =>
  <footer className='SiteFooter'>
    <Link to={prefixLink(`/atom.xml`)}>
      <i className='fa fa-rss' aria-hidden='true' />{' '}Atom Feed
    </Link>
  </footer>

export default Footer

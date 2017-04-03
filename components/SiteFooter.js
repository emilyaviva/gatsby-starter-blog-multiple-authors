import React from 'react'
import { prefixLink } from 'gatsby-helpers'

const Footer = () =>
  <footer className='SiteFooter'>
    <a href={prefixLink('/atom.xml')}>
      <i className='fa fa-rss' aria-hidden='true' />{' '}Atom Feed
    </a>
  </footer>

export default Footer

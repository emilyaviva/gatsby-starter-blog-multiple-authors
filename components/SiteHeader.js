import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const SiteHeader = () =>
  <header className='SiteHeader'>
    <Link to={prefixLink('/')}>Gatsby Multi-Author Blog Starter</Link>
  </header>

export default SiteHeader

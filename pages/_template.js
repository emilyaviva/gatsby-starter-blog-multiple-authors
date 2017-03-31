import React, { PropTypes } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

const Template = ({ children }) =>
  <div className='Template'>
    <SiteHeader />
    {children}
    <SiteFooter />
  </div>

Template.propTypes = {
  children: PropTypes.any
}

export default Template

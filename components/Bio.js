import React, { Component, PropTypes } from 'react'
import kebabCase from 'lodash/kebabCase'

class Bio extends Component {
  static propTypes = {
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
      bio: PropTypes.string
    })
  }
  render () {
    const { name, email, bio } = this.props.author
    const image = require(`../pages/authors/${kebabCase(name)}/image.png`)
    return (
      <section className='Bio'>
        <img src={image} alt={name} />
        <div className='bio-text'>
          <div className='bio-name'>
            {`by ${name}`}
          </div>
          <div className='bio-email'>
            <a href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <div className='bio-bio'>
            {bio}
          </div>
        </div>
      </section>
    )
  }
}

export default Bio

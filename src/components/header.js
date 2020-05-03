import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/kvlly.png'

const Header = () => {
  return (
    <div>
      <div
        style={{
          background: '#8A2387', // eslint-disable-next-line
          background:
            '-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)', // eslint-disable-next-line
          background: 'linear-gradient(to right, #F27121, #E94057, #8A2387)',
          padding: '0.5em 30px',
        }}
      >
        <div
          className="header-links"
          style={{
            maxWidth: '960px',
            textAlign: 'right',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Kelly Vaughn" />
            </Link>
          </div>
          <div className="links">
            <Link to="/now">Now</Link>
            <Link to="/book">Book</Link>
            <Link to="/buy-kelly-coffee">Coffee</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

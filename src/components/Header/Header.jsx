import React from 'react'
import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="nav_wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
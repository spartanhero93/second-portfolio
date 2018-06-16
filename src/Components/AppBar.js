import React, { Component } from 'react'
import astronaut from './astronaut.svg'
import styled from 'styled-components'

class AppBar extends Component {
  render () {
    return (
      <Header>
        <div>
          <Logo id='logo' src={astronaut} alt='astronaut' />
        </div>

        <Title>
          <p>&nbsp;Luis Lopez | Portfolio</p>
        </Title>

        <div>
          <Logo id='logo' src={astronaut} alt='astronaut' />
        </div>

      </Header>
    )
  }
}

const Header = styled.header`
  padding: 3rem 4rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.img`
  padding: 1rem;
  height: 10rem;
  width: 10rem;
`

const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 0.7rem;
  font-weight: 100;
  line-height: 9.5rem;
`

export default AppBar

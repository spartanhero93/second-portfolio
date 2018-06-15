import React, { Component } from 'react'
import astronaut from './astronaut.svg'
import styled from 'styled-components'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

class AppBar extends Component {
  state = {
    value: 'full'
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <Header>
        <div>
          <Logo id='logo' src={astronaut} alt='astronaut' />
        </div>

        <Choose>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>My Work</FormLabel>
            <RadioGroup
              aria-label='work'
              name='work'
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel
                value='front'
                control={<Radio color='primary' />}
                label='Front-end'
              />
              <FormControlLabel
                value='back'
                control={<Radio color='primary' />}
                label='Back-end'
              />
              <FormControlLabel
                value='full'
                control={<Radio color='primary' />}
                label='Full-stack'
              />
            </RadioGroup>
          </FormControl>
        </Choose>
      </Header>
    )
  }
}

const Header = styled.header`
  padding: 3rem 4rem;
  display: flex;
  margin: 0 auto;

  & > div {
    margin-right: 4rem;
  }
`

const Logo = styled.img`
  padding: 1rem;
  height: 10rem;
  width: 10rem;
`

const Choose = styled.div`
  text-align: center;
`

export default AppBar

import React, { Component } from 'react'
import styled from 'styled-components'

import bacon from './images/bacon.jpg'
import photowall from './images/photowall.jpg'
import pixabay from './images/pixabay.jpg'
import portfolio from './images/portfolio.jpg'
import quotemachine from './images/quotemachine.jpg'

import Grid from '@material-ui/core/Grid'

class Work extends Component {
  render () {
    return (
      <Container>
        <Grid container spacing={24}>
          <Grid item sm={4}>
            <Picture
              src={bacon}
              alt='bacon'
              currentChoice={this.props.currentChoice}
            />
          </Grid>

          <Grid item sm={4}>
            <Picture
              src={photowall}
              alt='photowall'
              currentChoice={this.props.currentChoice}
            />
          </Grid>

          <Grid item sm={4}>
            <Picture
              src={pixabay}
              alt='pixabay'
              currentChoice={this.props.currentChoice}
            />
          </Grid>

          <Grid item sm={4}>
            <Picture
              src={portfolio}
              alt='portfolio'
              currentChoice={this.props.currentChoice}
            />
          </Grid>

          <Grid item sm={4}>
            <Picture
              src={quotemachine}
              alt='quotemachine'
              currentChoice={this.props.currentChoice}
            />
          </Grid>
        </Grid>
      </Container>
    )
  }
}
const Container = styled.div`
  padding: 0 4rem;
  flex-grow: 1;
`

const Picture = styled.img`
  width: 100%;
  display: ${props => (props.currentChoice ? 'visible' : 'none')}
`

export default Work

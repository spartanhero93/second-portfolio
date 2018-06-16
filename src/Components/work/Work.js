import React, { Component } from 'react'
import styled from 'styled-components'

import bacon from './images/bacon.jpg'
import photowall from './images/photowall.jpg'
import pixabay from './images/pixabay.jpg'
import portfolio from './images/portfolio.jpg'
import quotemachine from './images/quotemachine.jpg'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class Work extends Component {
  render () {
    return (
      <Container>
        <Grid container spacing={24}>
          <Grid item sm={4}>
            <Card>
              <Picture src={bacon} alt='photowall' />
              <CardContent>
                <Typography
                  className='titles'
                  gutterBottom
                  variant='headline'
                  component='h2'
                >
                  Bacon Ipsum
                </Typography>
                <Typography component='p'>
                  React app that consumes the Bacon Ipsum API. Lets you receive the payload in HTML JSON or regular text format.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  <a
                    href='https://bacon-text-ipsum.herokuapp.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github Link
                  </a>
                </Button>
                <Button size='small' color='primary'>
                  <a
                    href='https://bacon-text-ipsum.herokuapp.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Heroku Link
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={4}>
            <Card>
              <Picture src={pixabay} alt='photowall' />
              <CardContent>
                <Typography
                  className='titles'
                  gutterBottom
                  variant='headline'
                  component='h2'
                >
                  PixaBay App
                </Typography>
                <Typography component='p'>
                  Using the power of React you can search the PixaBay API and decide how many pictures you want, in real-time!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  <a
                    href='https://github.com/spartanhero93/pixabay-react-app'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github Link
                  </a>
                </Button>
                <Button size='small' color='primary'>
                  <a
                    href='https://pixabay-app-react.herokuapp.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Heroku Link
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={4}>
            <Card>
              <Picture src={photowall} alt='photowall' />
              <CardContent>
                <Typography
                  className='titles'
                  gutterBottom
                  variant='headline'
                  component='h2'
                >
                  PhotoWall App
                </Typography>
                <Typography component='p'>
                  Using the Firebase Database users can upload links to images and even comment on them! Using React, React-Router, and Redux.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  <a
                    href='https://github.com/spartanhero93/React-Photowall'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github Link
                  </a>
                </Button>
                <Button size='small' color='primary'>
                  <a
                    href='https://photo-wall-app.herokuapp.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Heroku Link
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={4}>
            <Card>
              <Picture src={quotemachine} alt='photowall' />
              <CardContent>
                <Typography
                  className='titles'
                  gutterBottom
                  variant='headline'
                  component='h2'
                >
                  Quote Machine App
                </Typography>
                <Typography component='p'>
                  One of my first apps that uses Node for the backend to run an express server and serve quotes to the client.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  <a
                    href='https://github.com/spartanhero93/quote-machine-react-andVanilla'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github Link
                  </a>
                </Button>
                <Button size='small' color='primary' />
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={4}>
            <Card>
              <Picture src={portfolio} alt='photowall' />
              <CardContent>
                <Typography
                  className='titles'
                  gutterBottom
                  variant='headline'
                  component='h2'
                >
                  Canvas Portfolio
                </Typography>
                <Typography component='p'>
                  A work-in-progress portfolio that uses canvas, React , and styled-components to showcase my improvement in front end
                  development.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  <a
                    href='https://github.com/spartanhero93/New-Portfolio'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github Link
                  </a>
                </Button>
                <Button size='small' color='primary' />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
const Container = styled.div`
  padding: 0 4rem;
  flex-grow: 1;

  & a {
    text-decoration: none;
    color: unset;
  }
  & .titles {
    text-align: center;
  }
`

const Picture = styled.img`
  width: 100%;
`

export default Work

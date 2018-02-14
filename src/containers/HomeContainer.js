import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { Grid, Row, Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class Home extends Component {
  state = {
    redirectTo: null
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }
    return (
      <div>
        <NavBar />
        <div style={styles.carouselDiv}>
          <div style={styles.centeredDiv}>
            <p style={styles.subheading}>Computational Thinking</p>
            <p style={styles.mainHeading}> Digital Age Skills </p>

              <p style={styles.subheading}>       <iframe allowtransparency="true" width="485" height="402" src="//scratch.mit.edu/projects/embed/203766342/?autostart=false" frameborder="0" allowfullscreen></iframe>

</p>

          </div>
        </div>

       <div>
          <Grid style={styles.grid}>

            <Row>
              <Col md={4} style={{ width: '100%', paddingTop: 100, height: '65vh', backgroundColor: '#000' }}>
                <p style={styles.phaseTitle}>PHASE 1</p>
                <p style={styles.phaseSubTitle}>Add resources</p>
                <div style={styles.phaseButtonContainer}>
                  <button onClick={() => this.setState({ redirectTo: '/add-resources' })} style={Object.assign({}, styles.phaseButton, { color: '#000' })}>Create</button>
                </div>
              </Col>
              <Col md={4} style={{ width: '100%', paddingTop: 100, height: '65vh', backgroundColor: '#5e636a' }}>
                <p style={styles.phaseTitle}>PHASE 2</p>
                <p style={styles.phaseSubTitle}>Organize workshops</p>
                <div style={styles.phaseButtonContainer}>
                  <button onClick={() => this.setState({ redirectTo: '/resources' })} style={Object.assign({}, styles.phaseButton, { color: '#000' })}>Organize</button>
                </div>
              </Col>
              <Col md={4} style={{ width: '100%', paddingTop: 100, height: '65vh', backgroundColor: 'rgb(242, 242, 242)' }}>
                <p style={Object.assign({},styles.phaseTitle, { color: 'black'})}>PHASE 3</p>
                <p style={Object.assign({},styles.phaseSubTitle, { color: 'black'})}>Solved problems</p>
                <div style={styles.phaseButtonContainer}>
                  <button onClick={() => {}} style={Object.assign({}, styles.phaseButton, { backgroundColor: '#000'} )}>Implement</button>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }

}

const styles = {
  carouselDiv: {
    width: '100%',
    height: '95vh',
    background: 'linear-gradient(rgba(0,234,209,0.3), #01ffb3 90%), url(https://www.varmour.com/templates/varmour/images/easyblog/easyblog_articles/123/b2ap3_large_kids.jpg)',
    paddingTop: '10vh'
  },
  centeredDiv: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(256, 256, 256, 0.7)',
    textAlign: 'center',
    fontFamily: 'Montserrat'
  },
  mainHeading: {
    fontSize: 80,
    fontWeight: '600',
    color: '#43484f',
    margin: 0,
    marginTop: 20
  },
  subheading: {
    fontSize: 30,
    color: '#43484f',
    margin: 0
  },
  grid: {
    width: '100%',
    overflow: 'hidden',
    height:'auto'
  },
  leftText: {
    fontSize: 80,
    fontFamily: 'Montserrat',
    color: 'black',
    margin: 0,
    fontWeight: '700',
    textAlign: 'right',
  },
  leftGrid: {
    height: 600,
    backgroundColor: 'rgb(242, 242, 242)',
    paddingTop: 100,
    paddingRight: 100,
    width: '100%',
  },
  rightGrid: {
    height: 600,
    backgroundColor: 'black',
    width: '100%',
  },
  rightTop: {
    color: 'white',
    fontSize: 60,
    letterSpacing: 10,
    fontWeight: '900',
    fontFamily: 'Montserrat',
    textAlign: 'center'
  },
  rightText: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 10
  },
  rightButton: {
    textDecoration: 'none',
    border:'1px solid transparent',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 16,
    cursor: 'pointer'
  },
  rightButtonContainer: {
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 180
  },
  phaseTitle: {
    fontFamily: 'Montserrat',
    letterSpacing: 8,
    fontSize: 50,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  },
  phaseSubTitle: {
    fontFamily: 'Montserrat',
    fontSize: 25,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center'
  },
  phaseButton: {
    fontSize: 18,
    backgroundColor: '#fff',
    textDecoration: 'none',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    color: 'white',
    fontFamily: 'Montserrat',
    border:'1px solid transparent',
    cursor: 'pointer',
    marginTop: 20,
    fontSize: 18,
    marginBottom: 20,
    borderRadius: 30
  },
  phaseButtonContainer: {
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 60
  }
}

export default Home

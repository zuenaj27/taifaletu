import React, { Component } from 'react'
import * as firebase from 'firebase'
import { Link, Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Grid, Row, Col } from 'react-bootstrap'
import JoinStakeholderDialog from '../components/JoinStakeholderDialog'
import bStyles from '../styles/ChallengesContainerStyles'

// this.props.match.params.id is the push key from firebase

const mentors = [
  {
    name: 'Zuena Mgova',
    expertise: 'Head of Departiment'
  },
  {
    name: 'Maria Mgova',
    expertise: 'Country Lotary'
  },
  {
    name: 'Claudia Mgova',
    expertise: 'Director'
  }
]

class ChallengeDetailsContainer extends Component {
  state = {
    challenge: {},
    show: null,
    openDialog: false,
    redirectTo: null,
    tab: 'organizers',
    loading: false
  }

  componentWillMount() {
    firebase.database().ref('/resources/' + this.props.match.params.id).on('value', (snapshot) => {
      const challenge = snapshot.val()
      this.setState({ challenge })

      console.log(challenge)
    })
  }

  handleOnVote = (pushKey, votes) => {
    firebase.database().ref('/resources/' + pushKey + '/votes').set(votes + 1)
  }

  handleClick = e => {
    console.log('clicked! ', e.target.id)
    this.setState({ target: e.target, show: e.target.id });
  }

  handleOpenDialog = () => {
    console.log('open dialog')
    this.setState({ openDialog: true })
  }

  getNumberOfRolesTaken = (roles) => {
    const takenRoles = roles.filter((role) => role.organiser)
    return takenRoles.length
  }

  areAllRolesTaken = (roles) => {
    const numberOfRoles = this.getNumberOfRolesTaken(roles)
    return !(numberOfRoles >= 7)
  }

  onDownloadClick = () => {
    this.setState({loading: true});

    firebase.storage().ref().child('/resources/' + this.state.challenge.file).getDownloadURL()
    .then((url) => {
      this.setState({loading: false});

      var a = document.createElement('a');
      a.download = this.state.challenge.file;
      a.style.display = 'none';
      a.href = url;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }

  render() {
    const { challenge, redirectTo } = this.state
    const allRolesTaken = challenge.roles && this.areAllRolesTaken(Object.values(challenge.roles))
    if (redirectTo) {
      return <Redirect to={redirectTo} />
    }
    return (
      <div>
        <NavBar />
        <JoinStakeholderDialog
          open={this.state.openDialog}
          handleClose={() => this.setState({ openDialog: false })}
          pushKey={this.props.match.params.id}
        />
        <Grid style={{ width: '99%'}}>
          <Row className="show-grid">
            <Col md={6} style={styles.titleContainer}>
              <strong><p style={styles.titleText}>{challenge.title}</p></strong>
            </Col>
            <Col md={6} style={{ backgroundColor: '#5e636d', width: '100%' }}>
                <div style={{ height: 'auto' }}>
                  <p style={styles.descriptionText}>{challenge.description}</p>
                  <div style={{ position: 'relative', bottom: 0, textAlign: 'center', marginTop:'auto', marginLeft: 'auto', marginRight: 'auto'}}>


                    <button style={!this.state.challenge.file || this.state.loading ? bStyles.dButton : bStyles.button} onClick={this.onDownloadClick}>Download</button>
                  </div>
                </div>
            </Col>
          </Row>

        </Grid>
      </div>

    )
  }
}

const styles = {
  titleContainer: {
    backgroundColor: '#91dcc1',
    width: '100%',
    paddingTop: 80,
    paddingRight: 50
  },
  titleText: {
    color: '#4987c6',
    fontWeight:'800',
    fontSize: 80,
    marginRight: 50,
    fontFamily: 'Montserrat',
    letterSpacing: 6,
    textAlign: 'right'
  },
  descriptionText: {
    color: 'white',
    fontStyle: 'sans-serif',
    fontFamily: 'Domine',
    fontWeight: '300',
    width: 'auto',
    textAlign: 'left',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: 10,
    lineHeight: 1.5,
    fontSize: 19
  },
  bottomTitle: {
    textAlign: 'center',
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: '900',
    fontFamily: 'Montserrat',
    color: '#38c098'
  },
  bottomSubtitle: {
    fontFamily: 'Domine',
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
    color :'white',
    marginBottom: 30
  },
  tellUsTitle: {
    textAlign: 'center',
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: '900',
    fontFamily: 'Montserrat',
    color: 'black',
    paddingLeft: 25,
    cursor: 'pointer'
  },
  tellUsSelected: {
    color: 'white'
  },
  tellUsContainer: {
    textAlign: 'center',
    width: '100%',
  },
  stakeholderButton: {
    fontSize: 18,
    backgroundColor: '#38c098',
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
    marginBottom: 20
  },
  organizers: {
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  organizerContainer: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 5
  }
}

export default ChallengeDetailsContainer

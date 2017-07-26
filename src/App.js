import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components';
import logo from './ping-pong.svg';
import LeaderboardRow from './LeaderboardRow';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const Wrapper = styled.div`
  text-align: center;
`

const Header = styled.div`
  background-color: #3dd4aa;
  height: 150px;
  padding: 20px;
  color: white;
`

const Intro = styled.p`
  font-size: large;
`

const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`
const List = styled.ol`
  padding: 1rem;
  margin: 2rem;
`


const InputWrapper = styled.div`
    margin: 10px;
`

const label = styled.label`
    display: block;
`

const Navigation = () => (
    <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
        <li><Link to="/result">Add Result</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
      <Route path="/result" component={Result} />
        </div>

    </Router>
)

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navigation></Navigation>
      </Wrapper>
    );
  }
}

const Home = () => (
  <div>
    <Header>
      <Logo src={logo} alt="logo" />
      <h2>PongChamps</h2>
    </Header>
    <Intro>
      There can be only one Champion!
    </Intro>

    <List>
      <LeaderboardRow name="Graham" points="1000"/>
      <LeaderboardRow name="Dom" points="990"/>
      <LeaderboardRow name="Raj" points="988"/>
      <LeaderboardRow name="Anders" points="10"/>
    </List>
  </div>
)


class Result extends Component{
    constructor(props) {
        super(props)

        this.state = {
            player1: '',
            player2: '',
        }
    }

    render(){
        const { onSubmit } = this.props
        const { player1, player2 } = this.state

        return(
            <div>
                <h2>Results</h2>
                <div>
                    <InputWrapper>
                        <label>Player 1</label>
                    <input onChange={event => this.setState({ player1: event.target.value })}></input>
                    </InputWrapper>
                    <InputWrapper>
                        <label>Player 2</label>
                    <input onChange={event => this.setState({ player2: event.target.value })}></input>
                    </InputWrapper>
                    <button onClick={() => onSubmit(player1, player2)}>Submit result</button>
                </div>
            </div>
        )
    }
}

export default App;

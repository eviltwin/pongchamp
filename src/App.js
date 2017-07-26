import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './ping-pong.svg';
import LeaderboardRow from './LeaderboardRow';

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


class App extends Component {
  render() {
    return (
      <Wrapper>
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
      </Wrapper>
    );
  }
}

export default App;

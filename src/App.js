import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import logo from './pingpong.svg';

const Wrapper = styled.div`
  text-align: center;
`

const Header = styled.div`
  background-color: #222;
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

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} alt="logo" />
          <h2>ReactDojo London 26-07-2017</h2>
        </Header>
        <Intro>
          Welcome to ReactDojo London 26-07-2017 PingPong Battle Leadership Board
        </Intro>
      </Wrapper>
    );
  }
}

export default App;

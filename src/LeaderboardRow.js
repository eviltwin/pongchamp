import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';


const NameSpan = styled.span `
  font-wei
`
const PointsSpan = styled.span `
  float: right;
`

const ListItem = styled.li`
  border: 1px solid;
  padding: 1rem;
`

class LeaderboardRow extends Component {
  constructor (props){
    super(props);
    this.state = {
      leaders: {
        name: "Graham",
        points: 9098
      }
    }
  }
  render() {
    const { name, points} = this.props;

    return (
      <ListItem>
        <NameSpan>{ name } </NameSpan> 
        <PointsSpan>{ points }</PointsSpan>
      </ListItem>
    );
  }
}

export default LeaderboardRow;
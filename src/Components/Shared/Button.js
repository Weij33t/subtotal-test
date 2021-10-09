import React from 'react'
import styled from 'styled-components'
const Container = styled.button`
  padding: 7px 10px;
  margin: 0;
  border: 2px solid transparent;
  border-bottom: 2px solid #fff;
  box-shadow: 0px 0px 5px -4px #fff;
  background: #222;

  color: #fff;
  font-size: 20px;

  cursor: pointer;
  transition: 0.1s all;
  &.active {
    background: #fff;
    color: #222;
    border: none;
  }
  &:hover {
    border-color: #fff;
  }
`

export const Button = ({ value, ...rest }) => {
  return <Container {...rest}>{value}</Container>
}

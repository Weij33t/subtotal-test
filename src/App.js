import React from 'react'
import { LaunchList } from './Components/LaunchesList/LaunchList'
import styled from 'styled-components'

const Container = styled.div`
  background: #0f0f12;
  height: max-content;
  min-height: 100vh;
`

export const App = () => {
  return (
    <Container>
      <LaunchList />
    </Container>
  )
}

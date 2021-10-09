import React from 'react'

import styled from 'styled-components'
import { formatDate, formatDesc } from './../../utils/utils'

const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto max-content 170px;
  grid-template-areas: 'Image Image' 'Name Name' 'Desc Desc';
  align-content: start;
  gap: 10px;

  background: #222222;
  border-radius: 0px;
  border: 4px solid transparent;
  border-bottom: 3px solid #fff;
  box-shadow: 0px 4px 10px -7px #fff;

  color: #fff;

  .image {
    grid-area: Image;
    max-width: 100%;
  }

  .date {
    grid-area: Date;
    font-size: 17px;
  }

  .name,
  .desc {
    padding: 4px 25px 10px 25px;
  }
  .name {
    grid-area: Name;
    font-weight: bold;
    font-size: 22px;

    cursor: pointer;
  }
  .desc {
    grid-area: Desc;
  }
`

export const Launch = ({ launch, ...props }) => {
  return (
    <Container>
      <img className="image" src={launch.rocketImage} />
      <span className="name">
        {launch.name}
        {', '}
        <span className="date">{formatDate(launch.date)}</span>
      </span>
      <span className="desc">{formatDesc(launch.desc)}</span>
    </Container>
  )
}

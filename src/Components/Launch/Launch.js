import React, { useState } from 'react'

import styled from 'styled-components'
import { formatDate, formatDesc } from './../../utils/utils'

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto max-content 170px;
  grid-template-areas: 'Image Image' 'Name Name' 'Desc Desc';
  align-content: start;
  gap: 10px;

  position: relative;
  background: #222222;
  border-radius: 0px;

  cursor: pointer;
  color: #fff;
  &:hover {
    box-shadow: 0px 4px 10px -7px #fff;
  }
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
  const [isShowDesc, setIsShowDesc] = useState(false)

  const toggleDesc = () => setIsShowDesc(!isShowDesc)
  return (
    <Container onClick={toggleDesc}>
      {!isShowDesc && <img className="image" src={launch.rocketImage} />}
      <span className="name">
        {launch.name}
        {', '}
        <span className="date">{formatDate(launch.date)}</span>
      </span>
      {!isShowDesc && <span className="desc">{formatDesc(launch.desc)}</span>}
      {isShowDesc && <span className="desc">{launch.desc}</span>}
    </Container>
  )
}

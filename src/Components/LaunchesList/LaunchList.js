import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLaunches } from '../../store/launchesReducer'
import styled from 'styled-components'
import { Launch } from '../Launch/Launch'
import { Pagination } from './../Pagination/Pagination'
import { Button } from './../Shared/Button'

const TopContainer = styled.div`
  padding: 50px 0;
`

const Container = styled.div`
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 300px));
  grid-template-rows: 500px;
  gap: 60px;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px 0;

  .error {
    color: #fff;
    margin: 0 auto;
  }
`

const TopPanel = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;

  @media screen and (max-width: 450px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    gap: 25px;
  }
`

export const RocketList = () => {
  const dispatch = useDispatch()
  const launches = useSelector((state) => state.launches)
  const error = useSelector((state) => state.error)
  const currentPage = useSelector((state) => state.currentPage)
  const totalPages = useSelector((state) => state.totalPages)
  const order = useSelector((state) => state.order)

  useEffect(() => {
    dispatch(fetchLaunches(currentPage, order))
  }, [])

  const changePage = (page) => {
    dispatch(fetchLaunches(page, order))
  }

  const changeOrder = () => {
    const newOrder =
      order.value === 'desc'
        ? { value: 'asc', desc: 'Сначала старые' }
        : { value: 'desc', desc: 'Сначала новые' }
    dispatch(fetchLaunches(currentPage, newOrder))
  }

  if (error) {
    return <h1 className="error">{error}</h1>
  }

  return (
    <TopContainer>
      <TopPanel>
        <Button
          className={`${order.value === 'asc' ? 'active' : ''}`}
          value={order.desc}
          onClick={changeOrder}
        />
        <Pagination
          totalPages={totalPages}
          Button={Button}
          currentPage={currentPage}
          changePage={changePage}
        />
      </TopPanel>
      <Container>
        {launches.map((launch) => (
          <Launch key={launch.name} launch={launch} />
        ))}
      </Container>
    </TopContainer>
  )
}

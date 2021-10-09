import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 10px;
`

export const Pagination = ({ totalPages, changePage, currentPage, Button }) => {
  const PAGE_LOAD_STEP = 2
  const SCROLL_BAR_WIDTH = 18
  let pagesAtOnce = window.innerWidth < 768 + SCROLL_BAR_WIDTH ? 5 : 10
  pagesAtOnce =
    window.innerWidth < 500 + SCROLL_BAR_WIDTH ? 6 : Math.min(pagesAtOnce, 10)
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(pagesAtOnce)

  const pageClickHandler = (newCurrentPage) => {
    if (newCurrentPage > limit - PAGE_LOAD_STEP) {
      if (limit + PAGE_LOAD_STEP > totalPages) {
        setLimit(totalPages)
        setOffset(totalPages - pagesAtOnce)
      } else {
        setLimit(limit + PAGE_LOAD_STEP)
        setOffset(offset + PAGE_LOAD_STEP)
      }
    } else if (newCurrentPage < offset + 1 + PAGE_LOAD_STEP) {
      setLimit(Math.max(limit - PAGE_LOAD_STEP, pagesAtOnce))
      setOffset(Math.max(0, offset - PAGE_LOAD_STEP))
    }
    changePage(newCurrentPage)
  }

  const createPages = () => {
    const pages = []

    for (let i = offset; i < Math.min(limit, totalPages); i++) {
      const newPage = (
        <Button
          key={i}
          value={i + 1}
          className={currentPage === i + 1 && 'active'}
          onClick={() => pageClickHandler(i + 1)}
        />
      )
      pages.push(newPage)
    }
    return pages
  }
  return <Container>{createPages()}</Container>
}

// @ts-nocheck
import { Pagination } from './Pagination'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const changePage = jest.fn()

describe('Pagination', () => {
  it('should change active page number', () => {
    render(
      <Pagination totalPages={10} changePage={changePage} currentPage={1} />
    )
    const button = screen.getByText('3')

    fireEvent.click(button)

    expect(screen.getByText('3')).toHaveClass('active')
  })
})

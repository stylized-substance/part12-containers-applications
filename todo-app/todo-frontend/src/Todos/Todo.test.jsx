import { render, screen } from '@testing-library/react'
import Todo from './Todo'
import { vi } from 'vitest'

test('renders todo', () => {
  const todo = {
    text: 'Test todo',
    done: false
  }

  const mockOnClickDelete = vi.fn(() => null)
  
  const mockOnClickComplete = vi.fn(() => null)

  render(<Todo todo={todo} onClickDelete={mockOnClickDelete} onClickComplete={mockOnClickComplete} />)

  const todoText = screen.getByText('Test todo')
  const notDoneText = 'This todo is not done'
  expect(todoText).toBeDefined()
  expect(notDoneText).toBeDefined()
})
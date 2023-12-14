import * as React from 'react'
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const Board = styled.section`
  border: solid hsl(0, 0%, 100%);
  border-radius: 4px;
  box-shadow: 10px 5px 5px hsl(211, 68%, 94%);
  padding: 15px;
  height: fit-content;
  min-height: 300px;
  width: 500px;
  background-color: hsl(0, 0%, 100%);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function NotificationBoard({ children }: Props) {
  return <Board>{children}</Board>
}

export default NotificationBoard

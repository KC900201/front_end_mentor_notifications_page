import * as React from 'react'
import styled from 'styled-components'

const Board = styled.section`
  border: solid hsl(0, 0%, 100%);
  border-radius: 4px;
  box-shadow: 10px 5px 5px hsl(211, 68%, 94%);
  height: 600px;
  width: 500px;
  background-color: hsl(0, 0%, 100%);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function NotificationBoard() {
  return <Board></Board>
}

export default NotificationBoard

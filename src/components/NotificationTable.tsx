import * as React from 'react'
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const Table = styled.table`
  width: 100%;
  background-color: transparent;
`

function NotificationTable({ children }: Props) {
  return <Table>{children}</Table>
}

export default NotificationTable

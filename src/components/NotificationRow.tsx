import * as React from 'react'
import styled from 'styled-components'

interface NotificationProps {
  imageUrl?: string
  dateTime?: Date
  userName?: string
  content?: string
  privateMessage?: string
  isNew: boolean
}

const TableRow = styled.tr`
  display: flex;
  justify: flex-start;
  align-items: baseline;
  background-color: hsl(0, 0%, 100%);

  td {
    background-color: inherit;
  }
`
// Continue 11/29/2023 (Need to further modify the data arrangement)
function NotificationRow({
  imageUrl,
  dateTime,
  userName,
  content,
}: NotificationProps) {
  return (
    <TableRow>
      <td>Hello</td>
    </TableRow>
  )
}

export default NotificationRow

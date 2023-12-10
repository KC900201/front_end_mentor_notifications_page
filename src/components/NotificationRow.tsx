import * as React from 'react'
import styled from 'styled-components'
import { useImage } from 'react-image'

import { NotificationInterface } from '../interfaces/notification'
import defaultIcon from '../assets/default_icon.png'

const TableRow = styled.tr`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  align-items: center;
  background-color: hsl(0, 0%, 100%);

  td {
    background-color: inherit;
  }
`
// continue 12/7/2023
const GridComponent = styled.section`
  display: grid;
`
const ProfilePhoto = styled.img`
  display: block;
  width: 35px;
  height: 35px;
`

// WIP
const MainMessageComponent = styled.div``
const DateTimeComponent = styled.div``
const PrivateMessageComponent = styled.div``
const MediaComponent = styled.div``

function NotificationRow({
  profilePhotoUrl,
  dateTime,
  userName,
  mainMessage,
}: NotificationInterface) {
  const ProfleImageComponent = () => {
    const { src } = useImage({
      srcList: profilePhotoUrl ?? defaultIcon,
    })

    return <ProfilePhoto src={src} />
  }

  return (
    <TableRow>
      <td>
        <ProfleImageComponent />
      </td>
      {/* WIP */}
      <td>
        <GridComponent>
          <MainMessageComponent>asd</MainMessageComponent>
          <DateTimeComponent>asds</DateTimeComponent>
          <PrivateMessageComponent>asds</PrivateMessageComponent>
        </GridComponent>
      </td>
    </TableRow>
  )
}

export default NotificationRow

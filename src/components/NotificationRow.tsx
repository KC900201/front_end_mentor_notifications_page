import * as React from 'react'
import styled from 'styled-components'
import { useImage } from 'react-image'
import { format as formatDateTime } from 'date-fns'

import { NotificationInterface } from '../interfaces/notification'
import defaultIcon from '../assets/default_icon.png'

const TableRow = styled.tr`
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  margin-bottom: 1rem;

  td {
    background-color: inherit;
  }
`

const HighLightedText = styled.strong`
  font-weight: 800;
`

const ProfilePhoto = styled.img`
  display: block;
  width: 35px;
  height: 35px;
`

const MainMessageComponent = styled.div`
  font-size: 12px;
  text-align: justify;
`

const DateTimeComponent = styled.div`
  font-size: 12px;
`
const PrivateMessageComponent = styled.div``
// const MediaComponent = styled.div``

function NotificationRow({
  profilePhotoUrl,
  dateTime,
  userName,
  highlightedMessage,
  mainMessage,
  privateMessage,
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
      <td
        style={{
          display: 'grid',
          wordBreak: 'break-word',
          textOverflow: 'ellipsis',
        }}
      >
        <MainMessageComponent>
          <HighLightedText>{`${userName ?? ''}`}</HighLightedText>
          {` ${mainMessage ?? ''} `}
          <HighLightedText style={{ color: 'hsl(219, 85%, 26%)' }}>{`${
            highlightedMessage ?? ''
          }`}</HighLightedText>
        </MainMessageComponent>
        <DateTimeComponent>
          {dateTime ? formatDateTime(dateTime, 'yyyy/MM/dd') : ''}
        </DateTimeComponent>
        <PrivateMessageComponent>
          {privateMessage ?? ''}
        </PrivateMessageComponent>
      </td>
    </TableRow>
  )
}

export default NotificationRow

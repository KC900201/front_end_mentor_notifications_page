import * as React from 'react'
import styled from 'styled-components'
import { GoDotFill } from 'react-icons/go'
import { useImage } from 'react-image'
import { formatDistanceToNowStrict } from 'date-fns'

import { NotificationInterface } from '../interfaces/notification'
import defaultIcon from '../assets/default_icon.png'

const TableRow = styled.tr`
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
  align-items: flex-start;
  background-color: hsl(0, 0%, 100%);
  margin-bottom: 1rem;

  td,
  div {
    background-color: inherit;
  }
`

const HighLightedText = styled.strong`
  font-weight: 800;
  color: hsl(0, 0%, 0%);
  width: max-content;
`

const ProfilePhoto = styled.img`
  display: block;
  width: 35px;
  height: 35px;
`

const MainMessageComponent = styled.div`
  font-size: 12px;
  text-align: start;
  color: hsl(219, 12%, 42%);
`

const DateTimeComponent = styled.div`
  font-size: 12px;
  color: hsl(219, 14%, 63%);
`
const PrivateMessageComponent = styled.div`
  color: hsl(219, 12%, 42%);
  font-size: 12px;
  border: 0.5px solid hsl(219, 14%, 63%);
  border-radius: 4px;
  padding: 0.6rem;
`
// const MediaComponent = styled.div``

function NotificationRow({
  profilePhotoUrl,
  dateTime,
  isNew,
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

  const NewNotificationDot = () => (
    <GoDotFill style={{ color: 'hsl(1, 90%, 64%)' }} />
  )

  return (
    <TableRow>
      <td>
        <ProfleImageComponent />
      </td>
      <td
        style={{
          display: 'grid',
          gap: '5px',
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
          {isNew ? <NewNotificationDot /> : ''}
        </MainMessageComponent>
        <DateTimeComponent>
          {dateTime
            ? formatDistanceToNowStrict(dateTime, {
                addSuffix: true,
              })
            : ''}
        </DateTimeComponent>
        {privateMessage ? (
          <PrivateMessageComponent>{privateMessage}</PrivateMessageComponent>
        ) : (
          ''
        )}
      </td>
    </TableRow>
  )
}

export default NotificationRow

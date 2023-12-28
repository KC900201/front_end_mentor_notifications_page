import styled from 'styled-components'
import { GoDotFill } from 'react-icons/go'
import { useImage } from 'react-image'
import { formatDistanceToNowStrict } from 'date-fns'

import { NotificationInterface } from '../interfaces/notification'
import defaultIcon from '../assets/default_icon.png'

const TableRow = styled.tr<{ $isNew: boolean }>`
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
  align-items: flex-start;
  background-color: ${(props) =>
    props.$isNew ? `hsl(211, 68%, 94%)` : `hsl(0, 0%, 100%)`};
  margin-bottom: 1rem;
  border-radius: 4px;

  td,
  div {
    background-color: inherit;
  }
`

const HighLightedText = styled.strong`
  font-weight: 800;
  color: hsl(0, 0%, 0%);
  width: max-content;
  background-color: inherit;
`

const ProfilePhoto = styled.img`
  display: block;
  border-radius: 4px;
  width: 35px;
  height: 35px;
  background-color: inherit;
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
const MediaPhoto = styled.img`
  border-radius: 4px;
  width: 35px;
  height: 35px;
`

function NotificationRow({
  profilePhotoUrl,
  dateTime,
  isNew,
  userName,
  highlightedMessage,
  mainMessage,
  privateMessage,
  mediaUrl,
}: NotificationInterface) {
  const ProfleImageComponent = () => {
    const { src } = useImage({
      srcList: profilePhotoUrl ?? defaultIcon,
    })

    return <ProfilePhoto alt="profile photo" src={src} />
  }

  const MediaComponent = () => {
    const { src } = useImage({
      srcList: mediaUrl ?? defaultIcon,
    })

    return <MediaPhoto alt="media image" src={src} />
  }

  const NewNotificationDot = () => (
    <GoDotFill
      style={{ backgroundColor: 'inherit', color: 'hsl(1, 90%, 64%)' }}
    />
  )

  return (
    <TableRow $isNew={isNew}>
      <td>
        <ProfleImageComponent />
      </td>
      <td
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '9.9rem',
        }}
      >
        <section
          style={{
            display: 'grid',
            backgroundColor: 'inherit',
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
        </section>
        {mediaUrl ? <MediaComponent /> : ''}
      </td>
    </TableRow>
  )
}

export default NotificationRow

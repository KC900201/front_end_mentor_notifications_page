import styled from 'styled-components'

import type { NotificationType } from '../interfaces/notification'

const PanelTH = styled.th`
  background-color: hsl(0, 0%, 100%);
`

const NotificationAlert = styled.div`
  background-color: hsl(219, 85%, 26%);
  color: hsl(0, 0%, 100%);
  border-radius: 5px;
  min-width: 2rem;
  font-weight: 200;
  padding: 0.05rem;
`

const MarkReadButton = styled.button`
  background-color: inherit;
  font-weight: 500 !important;
  font-family: inherit;
  font-size: inherit;
  border: 0;
  margin: 0;
`

function NotificationPanel({
  notificationArrays,
}: {
  notificationArrays: NotificationType[]
}) {
  const newNotifications = notificationArrays.filter((el) => el.isNew).length

  // Continue fix function (12/27/2023)
  const markAllNotificationsAsRead = () => {
    console.log('Hello')
    notificationArrays.forEach((notification) => (notification.isNew = false))
  }

  return (
    <thead style={{ backgroundColor: 'transparent' }}>
      <tr
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',
          backgroundColor: 'transparent',
        }}
      >
        <PanelTH
          style={{
            display: 'flex',
            fontWeight: '800',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            gap: '0.75rem',
          }}
        >
          Notifications
          <NotificationAlert>{newNotifications}</NotificationAlert>
        </PanelTH>
        <PanelTH
          style={{
            textAlign: 'end',
          }}
        >
          <MarkReadButton
            type="button"
            onClick={() => markAllNotificationsAsRead()}
          >
            Mark all as read
          </MarkReadButton>
        </PanelTH>
      </tr>
    </thead>
  )
}

export default NotificationPanel

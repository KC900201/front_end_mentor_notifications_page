import React from 'react'
import './App.css'
import avatarAngela from './assets/avatar-angela-gray.webp'
import avatarMark from './assets/avatar-mark-webber.webp'

import type { NotificationType } from './interfaces/notification'

import NotificationBoard from './components/NotificationBoard'
import NotificationTable from './components/NotificationTable'
import NotificationPanel from './components/NotificationPanel'
import NotificationRow from './components/NotificationRow'

function App() {
  const notificationArrays: NotificationType[] = [
    {
      dateTime: new Date('2023-12-02'),
      userName: 'Mark Webber',
      profilePhotoUrl: avatarMark,
      mainMessage: 'reacted to your recent post My first tournament today!',
      isNew: true,
    },
    {
      dateTime: new Date('2023-12-01'),
      userName: 'Angela Gray',
      profilePhotoUrl: avatarAngela,
      mainMessage: 'followed you',
      isNew: true,
    },
  ]

  return (
    <NotificationBoard>
      <NotificationTable>
        <NotificationPanel />
        <tbody>
          {notificationArrays.map((el, idx) => (
            <NotificationRow
              key={`row-${idx}`}
              dateTime={el.dateTime}
              mainMessage={el.mainMessage}
              profilePhotoUrl={el.profilePhotoUrl}
              userName={el.userName}
              isNew={el.isNew}
            />
          ))}
        </tbody>
      </NotificationTable>
    </NotificationBoard>
  )
}

export default App

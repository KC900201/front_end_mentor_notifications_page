import React from 'react'
import './App.css'
import avatarAnna from './assets/avatar-anna-kim.webp'
import avatarAngela from './assets/avatar-angela-gray.webp'
import avatarMark from './assets/avatar-mark-webber.webp'
import avatarJacob from './assets/avatar-jacob-thompson.webp'
import avatarRizky from './assets/avatar-rizky-hasanuddin.webp'
import avatarKimberly from './assets/avatar-kimberly-smith.webp'
import avatarNathan from './assets/avatar-nathan-peterson.webp'

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
      mainMessage: 'reacted to your recent post',
      highlightedMessage: 'My first tournament today!',
      isNew: true,
    },
    {
      dateTime: new Date('2023-12-01'),
      userName: 'Angela Gray',
      profilePhotoUrl: avatarAngela,
      mainMessage: 'followed you',
      isNew: true,
    },
    {
      dateTime: new Date('2023-12-02'),
      userName: 'Jacob Thompson',
      profilePhotoUrl: avatarJacob,
      mainMessage: 'has joined your group',
      highlightedMessage: 'Chess Club',
      isNew: true,
    },
    {
      dateTime: new Date('2023-12-02'),
      userName: 'Rizky Hasanuddin',
      profilePhotoUrl: avatarRizky,
      mainMessage: 'sent you a private message',
      privateMessage: '',
      isNew: true,
    },
    {
      dateTime: new Date('2023-12-02'),
      userName: 'Kimberly Smith',
      profilePhotoUrl: avatarKimberly,
      mainMessage: 'commented on your picture',
      isNew: true,
    },
    {
      dateTime: new Date('2023-12-02'),
      userName: 'Nathan Peterson',
      profilePhotoUrl: avatarNathan,
      mainMessage: 'reacted to your recent post',
      highlightedMessage: '5 end-game strategies to increase your win rate',
      isNew: true,
    },
    {
      dateTime: new Date('2023-12-02'),
      userName: 'Anna Kim',
      profilePhotoUrl: avatarAnna,
      mainMessage: 'left the group',
      highlightedMessage: 'Chess Club',
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
              highlightedMessage={el.highlightedMessage}
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

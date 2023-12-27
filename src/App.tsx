import './App.css'

import avatarAnna from './assets/avatar-anna-kim.webp'
import avatarAngela from './assets/avatar-angela-gray.webp'
import avatarMark from './assets/avatar-mark-webber.webp'
import avatarJacob from './assets/avatar-jacob-thompson.webp'
import avatarRizky from './assets/avatar-rizky-hasanuddin.webp'
import avatarKimberly from './assets/avatar-kimberly-smith.webp'
import avatarNathan from './assets/avatar-nathan-peterson.webp'
import chessImage from './assets/image-chess.webp'

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
      dateTime: new Date('2023-12-20'),
      userName: 'Rizky Hasanuddin',
      profilePhotoUrl: avatarRizky,
      mainMessage: 'sent you a private message',
      privateMessage: `Hello, thanks for the setting up the Chess Club. I've been a memberfor a few weeks now and
                       I'm already having lots of fun and improving my game.`,
      isNew: false,
    },
    {
      dateTime: new Date('2023-12-18'),
      userName: 'Kimberly Smith',
      profilePhotoUrl: avatarKimberly,
      mainMessage: 'commented on your picture',
      mediaUrl: chessImage,
      isNew: false,
    },
    {
      dateTime: new Date('2023-12-02'),
      userName: 'Nathan Peterson',
      profilePhotoUrl: avatarNathan,
      mainMessage: 'reacted to your recent post',
      highlightedMessage: '5 end-game strategies to increase your win rate',
      isNew: false,
    },
    {
      dateTime: new Date('2023-12-02'),
      userName: 'Anna Kim',
      profilePhotoUrl: avatarAnna,
      mainMessage: 'left the group',
      highlightedMessage: 'Chess Club',
      isNew: false,
    },
  ]

  return (
    <NotificationBoard>
      <NotificationTable>
        <NotificationPanel notificationArrays={notificationArrays} />
        <tbody style={{ backgroundColor: 'transparent' }}>
          {notificationArrays.map((el, idx) => (
            <NotificationRow
              key={`row-${idx}`}
              dateTime={el.dateTime}
              mainMessage={el.mainMessage}
              highlightedMessage={el.highlightedMessage}
              privateMessage={el.privateMessage}
              profilePhotoUrl={el.profilePhotoUrl}
              mediaUrl={el.mediaUrl}
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

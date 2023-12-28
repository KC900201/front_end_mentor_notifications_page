import './App.css'
import React, { useState, useEffect } from 'react'

import { notificationObjects } from './helpers/notification'

import NotificationBoard from './components/NotificationBoard'
import NotificationTable from './components/NotificationTable'
import NotificationPanel from './components/NotificationPanel'
import NotificationRow from './components/NotificationRow'

function App() {
  const [isAllRead, setAsAllRead] = useState(false)

  // For improvement next time (12/29/2023)
  useEffect(() => {
    notificationObjects.forEach((notification) => (notification.isNew = false))
  }, [isAllRead])

  return (
    <NotificationBoard>
      <NotificationTable>
        <NotificationPanel
          notificationArrays={notificationObjects}
          setNotifications={setAsAllRead}
        />
        <tbody style={{ backgroundColor: 'transparent' }}>
          {notificationObjects.map((el, idx) => (
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

import React from 'react'
import './App.css'

import NotificationBoard from './components/NotificationBoard'
import NotificationTable from './components/NotificationTable'
import NotificationPanel from './components/NotificationPanel'
import NotificationRow from './components/NotificationRow'

function App() {
  return (
    <NotificationBoard>
      <NotificationTable>
        <NotificationPanel />
        <tbody>
          <NotificationRow isNew />
        </tbody>
      </NotificationTable>
    </NotificationBoard>
  )
}

export default App

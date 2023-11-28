import * as React from 'react'
import styled from 'styled-components'

const PanelTH = styled.th`
  background-color: hsl(0, 0%, 100%);
`

// Continue 11/29/2023 (Further work on data arrangement, add in button click for markall as read, number symbol)
function NotificationPanel() {
  return (
    <thead>
      <tr>
        <PanelTH
          style={{
            display: 'flex',
            fontWeight: '800',
            justifyContent: 'flex-start',
          }}
        >
          Notifications
        </PanelTH>
        <PanelTH>3</PanelTH>
        <PanelTH
          style={{
            fontWeight: '500',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          Mark all as read
        </PanelTH>
      </tr>
    </thead>
  )
}

export default NotificationPanel

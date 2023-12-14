export interface NotificationInterface {
  dateTime?: Date
  mediaUrl?: string
  highlightedMessage?: string
  mainMessage?: string
  profilePhotoUrl?: string
  privateMessage?: string
  userName?: string
  isNew: boolean
}

export type NotificationType =   NotificationInterface
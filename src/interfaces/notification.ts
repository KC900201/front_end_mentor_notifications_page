export interface NotificationInterface {
  dateTime?: Date
  profilePhotoUrl?: string
  userName?: string
  mediaUrl?: string
  mainMessage?: string
  privateMessage?: string
  isNew: boolean
}

export type NotificationType =   NotificationInterface
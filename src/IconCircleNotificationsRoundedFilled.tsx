import React from 'react'
import { IconProps } from './types'

const IconCircleNotificationsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-220q25 0 42.5-17.5T540-280H420q0 25 17.5 42.5T480-220Zm0-180Zm0 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM320-320h320q17 0 28.5-11.5T680-360q0-17-11.5-28.5T640-400v-104q0-61-31.5-111.5T520-680v-20q0-17-11.5-28.5T480-740q-17 0-28.5 11.5T440-700v20q-57 14-88.5 64.5T320-504v104q-17 0-28.5 11.5T280-360q0 17 11.5 28.5T320-320Z" />
  </svg>
)

export { IconCircleNotificationsRoundedFilled as default }

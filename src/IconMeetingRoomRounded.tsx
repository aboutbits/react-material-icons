import React from 'react'
import { IconProps } from './types'

const IconMeetingRoomRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-600q0-17 11.5-28.5T240-840h320q17 0 28.5 11.5T600-800h120q17 0 28.5 11.5T760-760v560h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120h-80q-17 0-28.5-11.5T680-160v-560h-80v560q0 17-11.5 28.5T560-120H160Zm120-640v560-560Zm200 280q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440q17 0 28.5-11.5T480-480ZM280-200h240v-560H280v560Z" />
  </svg>
)

export { IconMeetingRoomRounded as default }

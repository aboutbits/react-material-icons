import React from 'react'
import { IconProps } from './types'

const IconNoMeetingRoomRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m760-314-80-80v-326h-80v246l-80-80v-206H314l-80-80h326q16 0 22.5 14.5T600-800h120q17 0 28.5 11.5T760-760v446Zm4 230L600-248v88q0 17-11.5 28.5T560-120H160q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-448L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM280-200h240v-128L280-568v368Zm137-457Zm-17 209Z" />
  </svg>
)

export { IconNoMeetingRoomRounded as default }

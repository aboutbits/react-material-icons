import React from 'react'
import { IconProps } from './types.js'

export const IconMarkUnreadChatAltRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-720q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h404q-4 20-4 40t4 40q5 23 14 43t22 37H280q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640h480q32 0 63-10t57-30v360q0 33-23.5 56.5T800-240H240Zm40-280h400q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0 120h240q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480H280q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Z" />
  </svg>
)

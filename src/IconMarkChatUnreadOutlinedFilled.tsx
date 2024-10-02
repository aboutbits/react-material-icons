import React from 'react'
import { IconProps } from './types'

export const IconMarkChatUnreadOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-720q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-80v-720q0-33 23.5-56.5T160-880h404q-4 20-4 40t4 40q14 70 69 115t127 45q32 0 63-10t57-30v360q0 33-23.5 56.5T800-240H240L80-80Z" />
  </svg>
)

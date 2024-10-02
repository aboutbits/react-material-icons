import React from 'react'
import { IconProps } from './types'

export const IconMoveToInboxSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-400 320-560l56-58 64 64v-166h80v166l64-64 56 58-160 160ZM120-120v-720h720v720H120Zm80-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z" />
  </svg>
)

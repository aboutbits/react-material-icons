import React from 'react'
import { IconProps } from './types.js'

export const IconMoveToInboxSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-400 320-560l56-58 64 64v-166h80v166l64-64 56 58-160 160ZM120-120v-720h720v720H120Zm360-200q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22Z" />
  </svg>
)

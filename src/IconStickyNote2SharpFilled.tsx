import React from 'react'
import { IconProps } from './types.js'

export const IconStickyNote2SharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-400H560v200l200-200ZM120-120v-720h720v480L600-120H120Zm160-280h200v-80H280v80Zm0-160h400v-80H280v80Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconDeveloperBoardOffOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 27-820l57-57L876-85l-57 57ZM233-840h487q33 0 56.5 23.5T800-760v80h80v80h-80v80h80v80h-80v80h80v80h-87l-73-73v-407H313l-80-80Zm207 207-47-47h47v47Zm73 73-33-33v-87h160v120H513Zm127 126-86-86h86v86Zm-233-6Zm110-118ZM240-280v-160h200v160H240ZM128-833l73 73h-41v560h560v-41l80 80q-14 20-35 30.5T720-120H160q-33 0-56.5-23.5T80-200v-560q0-25 13.5-44.5T128-833Zm352 352 160 160v41H480v-201ZM281-680l159 159v41H240v-200h41Z" />
  </svg>
)

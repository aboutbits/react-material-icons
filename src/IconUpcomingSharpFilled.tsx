import React from 'react'
import { IconProps } from './types.js'

export const IconUpcomingSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-360h280q0 50 35 85t85 35q50 0 85-35t35-85h280v360H80Zm624-408-56-56 142-142 56 56-142 142Zm-448 0L114-670l56-56 142 142-56 56Zm184-112v-200h80v200h-80Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconUpcomingOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-200q0-33 23.5-56.5T160-480h200q0 50 35 85t85 35q50 0 85-35t35-85h200q33 0 56.5 23.5T880-400v200q0 33-23.5 56.5T800-120H160Zm544-408-56-56 142-142 56 56-142 142Zm-448 0L114-670l56-56 142 142-56 56Zm184-112v-200h80v200h-80Z" />
  </svg>
)

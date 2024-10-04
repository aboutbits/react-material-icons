import React from 'react'
import { IconProps } from './types.js'

export const IconTextRotationAngleupOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m389-92-56-56 372-372h-64v-80h200v200h-80v-64L389-92Zm-60-224L135-744l56-56 428 196-54 54-106-52-126 126 50 106-54 54Zm-26-222 94-92-174-84-2 2 82 174Z" />
  </svg>
)

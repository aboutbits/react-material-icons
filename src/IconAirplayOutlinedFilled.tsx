import React from 'react'
import { IconProps } from './types.js'

export const IconAirplayOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-120 240-240 240 240H240Zm-80-80q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200h-40L480-480 200-200h-40Z" />
  </svg>
)

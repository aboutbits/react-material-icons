import React from 'react'
import { IconProps } from './types.js'

export const IconShapesRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-320q-117 0-198.5-81.5T80-600q0-117 81.5-198.5T360-880q117 0 198.5 81.5T640-600q0 117-81.5 198.5T360-320Zm40 240q-33 0-56.5-23.5T320-160v-46q0-14 10.5-24.5T356-241q75 0 140-25t119-79q54-54 79-119t25-140q0-15 10.5-25.5T754-640h46q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H400Z" />
  </svg>
)

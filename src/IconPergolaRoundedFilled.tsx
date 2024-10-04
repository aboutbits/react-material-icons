import React from 'react'
import { IconProps } from './types.js'

export const IconPergolaRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-680q0-17 11.5-28.5T160-880q17 0 28.5 11.5T200-840v40h560v-40q0-17 11.5-28.5T800-880q17 0 28.5 11.5T840-840v680q0 17-11.5 28.5T800-120q-17 0-28.5-11.5T760-160v-400H200v400q0 17-11.5 28.5T160-120q-17 0-28.5-11.5T120-160Zm320 0v-80h-80q-17 0-28.5-11.5T320-280q0-17 11.5-28.5T360-320h240q17 0 28.5 11.5T640-280q0 17-11.5 28.5T600-240h-80v80q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Z" />
  </svg>
)
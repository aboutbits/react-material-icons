import React from 'react'
import { IconProps } from './types'

export const IconFiberNewOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm20-200h50v-140l102 140h48v-240h-50v140L190-600h-50v240Zm240 0h160v-50H440v-44h100v-50H440v-46h100v-50H380v240Zm240 0h160q17 0 28.5-11.5T820-400v-200h-50v180h-44v-140h-50v140h-46v-180h-50v200q0 17 11.5 28.5T620-360Z" />
  </svg>
)

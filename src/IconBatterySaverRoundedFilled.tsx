import React from 'react'
import { IconProps } from './types.js'

export const IconBatterySaverRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-200h-80q-17 0-28.5-11.5T520-240q0-17 11.5-28.5T560-280h80v-80q0-17 11.5-28.5T680-400q17 0 28.5 11.5T720-360v80h80q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200h-80v80q0 17-11.5 28.5T680-80q-17 0-28.5-11.5T640-120v-80ZM320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v253q0 11-8 19.5t-19 9.5q-42 5-78 22.5T511-410q-32 32-51.5 75.5T440-240q0 30 7 58t21 54q8 17 0 32.5T443-80H320Z" />
  </svg>
)

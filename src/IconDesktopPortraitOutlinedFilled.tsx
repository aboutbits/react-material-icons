import React from 'react'
import { IconProps } from './types'

export const IconDesktopPortraitOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-240h200v-360H440v360ZM320-360h60v-300h140v-60H320v360Zm480 200q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconAirlineSeatReclineNormalOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-160H320q-33 0-56.5-23.5T240-240v-440h80v440h280v80ZM460-720q-33 0-56.5-23.5T380-800q0-33 23.5-56.5T460-880q33 0 56.5 23.5T540-800q0 33-23.5 56.5T460-720ZM640-80v-200H440q-33 0-56.5-23.5T360-360v-220q0-42 29-71t71-29q42 0 71 29t29 71v180h80q33 0 56.5 23.5T720-320v240h-80Z" />
  </svg>
)

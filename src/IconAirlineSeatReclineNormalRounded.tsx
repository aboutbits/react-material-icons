import React from 'react'
import { IconProps } from './types'

const IconAirlineSeatReclineNormalRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-160H320q-33 0-56.5-23.5T240-240v-400q0-17 11.5-28.5T280-680q17 0 28.5 11.5T320-640v400h240q17 0 28.5 11.5T600-200q0 17-11.5 28.5T560-160ZM460-720q-33 0-56.5-23.5T380-800q0-33 23.5-56.5T460-880q33 0 56.5 23.5T540-800q0 33-23.5 56.5T460-720Zm180 600v-160H440q-33 0-56.5-23.5T360-360v-220q0-42 29-71t71-29q42 0 71 29t29 71v180h80q33 0 56.5 23.5T720-320v200q0 17-11.5 28.5T680-80q-17 0-28.5-11.5T640-120Z" />
  </svg>
)

export { IconAirlineSeatReclineNormalRounded as default }

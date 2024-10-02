import React from 'react'
import { IconProps } from './types'

export const IconDockRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-80q0-17 11.5-28.5T360-120h240q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40H360q-17 0-28.5-11.5T320-80Zm0-120q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h320q33 0 56.5 23.5T720-840v560q0 33-23.5 56.5T640-200H320Zm0-120v40h320v-40H320Zm0-80h320v-320H320v320Zm0-400h320v-40H320v40Zm0 0v-40 40Zm0 480v40-40Z" />
  </svg>
)

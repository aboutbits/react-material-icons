import React from 'react'
import { IconProps } from './types.js'

export const IconHardDrive2SharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-200q17 0 28.5-11.5T600-240q0-17-11.5-28.5T560-280q-17 0-28.5 11.5T520-240q0 17 11.5 28.5T560-200Zm120 0q17 0 28.5-11.5T720-240q0-17-11.5-28.5T680-280q-17 0-28.5 11.5T640-240q0 17 11.5 28.5T680-200ZM120-440v-440h720v440H120Zm0 360v-280h720v280H120Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconEqualizerRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-160q-33 0-56.5-23.5T160-240v-160q0-33 23.5-56.5T240-480q33 0 56.5 23.5T320-400v160q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240v-480q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720v480q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240v-280q0-33 23.5-56.5T720-600q33 0 56.5 23.5T800-520v280q0 33-23.5 56.5T720-160Z" />
  </svg>
)
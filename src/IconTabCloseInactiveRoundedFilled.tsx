import React from 'react'
import { IconProps } from './types.js'

export const IconTabCloseInactiveRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-120q0 17-11.5 28.5T680-80h-80q-17 0-28.5-11.5T560-120q0-17 11.5-28.5T600-160h80q17 0 28.5 11.5T720-120Zm-240 0q0 17-11.5 28.5T440-80h-80q-17 0-28.5-11.5T320-120q0-17 11.5-28.5T360-160h80q17 0 28.5 11.5T480-120ZM120-720q17 0 28.5 11.5T160-680v80q0 17-11.5 28.5T120-560q-17 0-28.5-11.5T80-600v-80q0-17 11.5-28.5T120-720Zm0 240q17 0 28.5 11.5T160-440v80q0 17-11.5 28.5T120-320q-17 0-28.5-11.5T80-360v-80q0-17 11.5-28.5T120-480Zm40 400q-33 0-56.5-23.5T80-160v-40q0-17 11.5-28.5T120-240q17 0 28.5 11.5T160-200v40h40q17 0 28.5 11.5T240-120q0 17-11.5 28.5T200-80h-40Zm160-160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm184-208 56-56 56 56q11 11 28 11t28-11q11-11 11-28t-11-28l-56-56 56-56q11-11 11-28t-11-28q-11-11-28-11t-28 11l-56 56-56-56q-11-11-28-11t-28 11q-11 11-11 28t11 28l56 56-56 56q-11 11-11 28t11 28q11 11 28 11t28-11Z" />
  </svg>
)

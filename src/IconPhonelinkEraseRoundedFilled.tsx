import React from 'react'
import { IconProps } from './types.js'

export const IconPhonelinkEraseRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m680-424-76 76q-11 11-28 11t-28-11q-11-11-11-28t11-28l76-76-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l76 76 76-76q11-11 28-11t28 11q11 11 11 28t-11 28l-76 76 76 76q11 11 11 28t-11 28q-11 11-28 11t-28-11l-76-76ZM240-40q-33 0-56.5-23.5T160-120v-720q0-33 23.5-56.5T240-920h400q33 0 56.5 23.5T720-840v120q0 17-11.5 28.5T680-680q-17 0-28.5-11.5T640-720H240v480h400q0-17 11.5-28.5T680-280q17 0 28.5 11.5T720-240v120q0 33-23.5 56.5T640-40H240Z" />
  </svg>
)

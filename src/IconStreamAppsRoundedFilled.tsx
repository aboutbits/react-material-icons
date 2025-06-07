import React from 'react'
import { IconProps } from './types.js'

export const IconStreamAppsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m640-360-46 46q-10 10-22 5t-12-19v-272q0-17 11.5-28.5T600-640h280q17 0 28.5 11.5T920-600v200q0 17-11.5 28.5T880-360H640ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v120q0 17-11.5 28.5T720-680q-17 0-28.5-11.5T680-720H280v480h400q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240v120q0 33-23.5 56.5T680-40H280Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconPersonalBagOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-880q51 0 85.5 37.5T600-754v22q71 33 115.5 100T760-480v69q0 27-24.5 37.5T692-382L383-691q-11-11-17-25.5t-6-30.5v-13q0-50 35-85t85-35Zm0 80q-17 0-28.5 11.5T440-760v4q11-2 20-3t20-1q11 0 20 1t20 3v-4q0-17-11.5-28.5T480-800ZM764-84 647-200h113v40q0 33-23.5 56.5T680-80H280q-33 0-56.5-23.5T200-160v-320q0-36 8.5-69.5T234-612L84-764q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-28 11t-28-11ZM366-480h-6q-17 0-28.5 11.5T320-440q0 17 11.5 28.5T360-400h86l-80-80Z" />
  </svg>
)

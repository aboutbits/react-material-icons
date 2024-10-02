import React from 'react'
import { IconProps } from './types'

export const IconPersonalBagOffRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-880q52 0 86 37.5t34 88.5v22q71 33 115.5 100T760-480v80q0 20-12.5 30T720-360q-15 0-27.5-10.5T680-401v-79q0-83-58.5-141.5T480-680h-40q-33 0-56.5-23.5T360-760q0-50 35-85t85-35Zm0 80q-17 0-28.5 11.5T440-760v4q11-2 20-3t20-1q11 0 20 1t20 3v-4q0-17-11.5-28.5T480-800ZM764-84 446-400h-86q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480h6l-72-72q-6 17-10 34.5t-4 37.5v320h400v-120l80 80v40q0 33-23.5 56.5T680-80H280q-33 0-56.5-23.5T200-160v-320q0-36 8.5-69.5T234-612L84-764q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-28 11t-28-11ZM544-537Zm-98 137Zm34 44Z" />
  </svg>
)

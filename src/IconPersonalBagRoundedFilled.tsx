import React from 'react'
import { IconProps } from './types'

const IconPersonalBagRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80q-33 0-56.5-23.5T200-160v-320q0-85 44.5-152T360-732v-28q0-50 35-85t85-35q50 0 85 35t35 85v28q71 33 115.5 100T760-480v320q0 33-23.5 56.5T680-80H280Zm320-240q17 0 28.5-11.5T640-360v-40q0-33-23.5-56.5T560-480H360q-17 0-28.5 11.5T320-440q0 17 11.5 28.5T360-400h200v40q0 17 11.5 28.5T600-320ZM440-756q11-2 20-3t20-1q11 0 20 1t20 3v-4q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v4Z" />
  </svg>
)

export { IconPersonalBagRoundedFilled as default }

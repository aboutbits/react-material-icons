import React from 'react'
import { IconProps } from './types'

const IconContactPhoneOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm280-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm400 160 80-80-60-80h-66q-6-18-10-38.5t-4-41.5q0-21 4-40.5t10-39.5h66l60-80-80-80q-54 42-87 106.5T640-480q0 69 33 133.5T760-240ZM84-200h552q-42-75-116-117.5T360-360q-86 0-160 42.5T84-200Z" />
  </svg>
)

export { IconContactPhoneOutlinedFilled as default }

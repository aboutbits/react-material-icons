import React from 'react'
import { IconProps } from './types'

const IconEmergencyHomeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-425h80v-270h-80v270Zm40 105q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Zm0 272L48-480l432-432 432 432L480-48Zm0-112 320-320-320-320-320 320 320 320Zm0-320Z" />
  </svg>
)

export { IconEmergencyHomeSharp as default }

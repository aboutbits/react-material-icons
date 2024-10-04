import React from 'react'
import { IconProps } from './types'

const IconDirectionsAltSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-48 48-480l432-432 432 432L480-48Zm0-112 320-320-320-320-320 320 320 320Zm0-120 200-200-200-200-56 56 102 104H280v80h246L424-336l56 56Zm0-200Z" />
  </svg>
)

export { IconDirectionsAltSharp as default }

import React from 'react'
import { IconProps } from './types.js'

export const IconCarryOnBagCheckedOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m692-150 142-142-30-30-112 112-56-56-30 30 86 86Zm28 110q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-300-80v-560h140v-120q-33 0-56.5-23.5T480-880h160v372q-89 29-144.5 102T440-240q0 32 7 61.5t21 58.5h-48Zm-100 0q-33 0-56.5-23.5T240-200v-400q0-33 23.5-56.5T320-680h40v560h-40Z" />
  </svg>
)

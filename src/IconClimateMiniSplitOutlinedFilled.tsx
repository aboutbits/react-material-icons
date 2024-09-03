import React from 'react'
import { IconProps } from './types'

const IconClimateMiniSplitOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-480q-33 0-56.5-23.5T80-560v-240q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v240q0 33-23.5 56.5T800-480h-80v-160q0-33-23.5-56.5T640-720H320q-33 0-56.5 23.5T240-640v160h-80Zm120 80h80q0 83-58.5 141.5T160-200v-80q50 0 85-35t35-85Zm40-80v-160h320v160H320Zm120 320v-240h80v240h-80Zm160-240h80q0 50 35 85t85 35v80q-83 0-141.5-58.5T600-400Z" />
  </svg>
)

export { IconClimateMiniSplitOutlinedFilled as default }

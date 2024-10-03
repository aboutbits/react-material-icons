import React from 'react'
import { IconProps } from './types.js'

export const IconClimateMiniSplitSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-480H80v-400h800v400ZM160-200v-80q50 0 85-35t35-85h80q0 83-58.5 141.5T160-200Zm640 0q-83 0-141.5-58.5T600-400h80q0 50 35 85t85 35v80Zm-360 40v-240h80v240h-80Zm360-400H160h640Zm-560 0v-160h480v160h-80v-80H320v80h-80Zm-80 0h640v-240H160v240Z" />
  </svg>
)

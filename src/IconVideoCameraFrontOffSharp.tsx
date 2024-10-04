import React from 'react'
import { IconProps } from './types'

const IconVideoCameraFrontOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-260 720-420v67l-80-80v-287H353l-80-80h447v260l160-160v440ZM822-26 26-822l56-56L878-82l-56 56ZM497-577ZM384-464ZM160-800l80 80h-80v480h480v-80l80 80v80H80v-640h80Zm80 480v-22q0-44 44-71t116-27q72 0 116 27t44 71v22H240Z" />
  </svg>
)

export { IconVideoCameraFrontOffSharp as default }

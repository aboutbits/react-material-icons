import React from 'react'
import { IconProps } from './types'

export const IconVideoCameraFrontOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-260 720-420v67L273-800h447v260l160-160v440ZM822-26 26-822l56-56L878-82l-56 56ZM160-800l560 560v80H80v-640h80Zm80 480h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Z" />
  </svg>
)

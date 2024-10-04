import React from 'react'
import { IconProps } from './types.js'

export const IconFilterFramesOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80q-33 0-56.5-23.5T80-160v-560q0-33 23.5-56.5T160-800h160l160-160 160 160h160q33 0 56.5 23.5T880-720v560q0 33-23.5 56.5T800-80H160Zm0-80h640v-560H160v560Zm80-80v-400h480v400H240Z" />
  </svg>
)
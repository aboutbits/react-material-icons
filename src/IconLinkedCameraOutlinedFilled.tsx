import React from 'react'
import { IconProps } from './types.js'

export const IconLinkedCameraOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M826-680q0-78-54-132t-132-54v-54q100 0 170 70t70 170h-54Zm-106 0q0-33-23.5-56.5T640-760v-54q55 0 93.5 39t40.5 95h-54ZM480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240v120q33 0 56.5 23.5T680-640h200v440q0 33-23.5 56.5T800-120H160Z" />
  </svg>
)
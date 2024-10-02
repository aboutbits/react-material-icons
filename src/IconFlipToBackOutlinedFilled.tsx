import React from 'react'
import { IconProps } from './types'

export const IconFlipToBackOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-480h80v480h480v80H200Zm160-240v80q-33 0-56.5-23.5T280-360h80Zm-80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80-160h-80q0-33 23.5-56.5T360-840v80Zm80 480v-80h80v80h-80Zm0-480v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0 480v-80h80v80h-80Zm160-480v-80q33 0 56.5 23.5T840-760h-80Zm0 400h80q0 33-23.5 56.5T760-280v-80Zm0-80v-80h80v80h-80Zm0-160v-80h80v80h-80Z" />
  </svg>
)

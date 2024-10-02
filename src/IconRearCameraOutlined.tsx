import React from 'react'
import { IconProps } from './types'

export const IconRearCameraOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-320 160-160-160-160-56 56 64 64H80v80h168l-64 64 56 56Zm420-320q17 0 28.5-11.5T700-680q0-17-11.5-28.5T660-720q-17 0-28.5 11.5T620-680q0 17 11.5 28.5T660-640ZM520-200h280v-560H520v560Zm-360 80q-33 0-56.5-23.5T80-200v-160h80v160h280v-560H160v160H80v-160q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm280-640v560-560Z" />
  </svg>
)

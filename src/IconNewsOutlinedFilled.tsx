import React from 'react'
import { IconProps } from './types'

const IconNewsOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm80-160h400v-80H280v80Zm0-160h400v-80H280v80Zm320-160h160L600-760v160Zm-320 0h200v-80H280v80Z" />
  </svg>
)

export { IconNewsOutlinedFilled as default }

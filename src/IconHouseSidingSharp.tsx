import React from 'react'
import { IconProps } from './types'

const IconHouseSidingSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-406L88-440l-48-64 440-336 440 336-48 64-112-86v406h-80v-120H280v120h-80Zm80-360h400v-80H280v80Zm0 160h400v-80H280v80Zm70-320h260l-130-99-130 99Z" />
  </svg>
)

export { IconHouseSidingSharp as default }

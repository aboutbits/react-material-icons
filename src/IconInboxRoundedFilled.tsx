import React from 'react'
import { IconProps } from './types'

const IconInboxRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-200q32 0 59-16.5t44-43.5q6-9 15-14.5t20-5.5h142v-360H200v360h142q11 0 20 5.5t15 14.5q17 27 44 43.5t59 16.5Z" />
  </svg>
)

export { IconInboxRoundedFilled as default }

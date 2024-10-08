import React from 'react'
import { IconProps } from './types'

const IconSpaceDashboardOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240v720H200Zm320 0v-360h320v280q0 33-23.5 56.5T760-120H520Zm0-440v-280h240q33 0 56.5 23.5T840-760v200H520Z" />
  </svg>
)

export { IconSpaceDashboardOutlinedFilled as default }

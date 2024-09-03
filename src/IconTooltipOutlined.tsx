import React from 'react'
import { IconProps } from './types'

const IconTooltipOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80 374-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H586L480-80ZM160-320h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

export { IconTooltipOutlined as default }
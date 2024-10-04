import React from 'react'
import { IconProps } from './types'

const IconArrowLeftAltOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
  </svg>
)

export { IconArrowLeftAltOutlined as default }

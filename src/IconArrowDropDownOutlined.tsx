import React from 'react'
import { IconProps } from './types'

const IconArrowDropDownOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-360 280-560h400L480-360Z" />
  </svg>
)

export { IconArrowDropDownOutlined as default }

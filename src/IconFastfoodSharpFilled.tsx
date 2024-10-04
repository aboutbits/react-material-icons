import React from 'react'
import { IconProps } from './types'

const IconFastfoodSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-360q0-109 91-174.5T340-600q118 0 209 65.5T640-360H40Zm0 160v-80h600v80H40Zm0 160v-80h600v80H40Zm680 0v-320q0-114-78-197T451-668l-11-92h200v-160h80v160h200L848-40H720Z" />
  </svg>
)

export { IconFastfoodSharpFilled as default }

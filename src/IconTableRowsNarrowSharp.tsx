import React from 'react'
import { IconProps } from './types'

const IconTableRowsNarrowSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-360h560v-80H200v80Zm0-160h560v-80H200v80Zm0-160h560v-80H200v80Zm-80 560v-720h720v720H120Zm80-80h560v-80H200v80Z" />
  </svg>
)

export { IconTableRowsNarrowSharp as default }

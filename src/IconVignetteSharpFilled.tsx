import React from 'react'
import { IconProps } from './types'

const IconVignetteSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm400-160q98 0 169-47.5T720-480q0-65-71-112.5T480-640q-98 0-169 47.5T240-480q0 65 71 112.5T480-320Z" />
  </svg>
)

export { IconVignetteSharpFilled as default }

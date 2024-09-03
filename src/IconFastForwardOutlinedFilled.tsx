import React from 'react'
import { IconProps } from './types'

const IconFastForwardOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M100-240v-480l360 240-360 240Zm400 0v-480l360 240-360 240Z" />
  </svg>
)

export { IconFastForwardOutlinedFilled as default }

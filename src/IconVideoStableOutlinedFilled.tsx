import React from 'react'
import { IconProps } from './types'

const IconVideoStableOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm519-80 92-346-488-134-92 346 488 134Z" />
  </svg>
)

export { IconVideoStableOutlinedFilled as default }

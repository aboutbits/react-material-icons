import React from 'react'
import { IconProps } from './types'

const IconArrowDropUpOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m280-400 200-200 200 200H280Z" />
  </svg>
)

export { IconArrowDropUpOutlinedFilled as default }

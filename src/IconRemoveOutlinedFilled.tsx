import React from 'react'
import { IconProps } from './types'

const IconRemoveOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-440v-80h560v80H200Z" />
  </svg>
)

export { IconRemoveOutlinedFilled as default }

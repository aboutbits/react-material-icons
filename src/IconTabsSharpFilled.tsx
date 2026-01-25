import React from 'react'
import { IconProps } from './types.js'

export const IconTabsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-80h560v-280H200v280Zm280-440h240v-80H480v80Z" />
  </svg>
)

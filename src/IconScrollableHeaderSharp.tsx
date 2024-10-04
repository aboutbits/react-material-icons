import React from 'react'
import { IconProps } from './types'

const IconScrollableHeaderSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-80h560v-200H200v200Zm0-280h560v-280H200v280Zm0 0v-280 280Z" />
  </svg>
)

export { IconScrollableHeaderSharp as default }

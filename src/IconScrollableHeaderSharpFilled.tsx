import React from 'react'
import { IconProps } from './types'

const IconScrollableHeaderSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-80h560v-200H200v200Z" />
  </svg>
)

export { IconScrollableHeaderSharpFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconSpaceBarSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M18 9v4H6V9H4v6h16V9h-2z" />
  </svg>
)

export { IconSpaceBarSharp as default }

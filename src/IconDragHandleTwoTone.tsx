import React from 'react'
import { IconProps } from './types'

const IconDragHandleTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 9h16v2H4zm0 4h16v2H4z" />
  </svg>
)

export { IconDragHandleTwoTone as default }

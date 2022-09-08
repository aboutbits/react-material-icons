import React from 'react'
import { IconProps } from './types'

const IconChatBubbleOutlineSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 2H2v20l4-4h16V2zm-2 14H6l-2 2V4h16v12z" />
  </svg>
)

export { IconChatBubbleOutlineSharp as default }

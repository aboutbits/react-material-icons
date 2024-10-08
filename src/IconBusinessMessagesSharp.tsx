import React from 'react'
import { IconProps } from './types'

const IconBusinessMessagesSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160v-450L40-800h840v640H200Zm80-560v480h520v-480H280Zm260 460 56-56-44-44h168v-80H360l180 180ZM360-520h360L540-700l-56 56 44 44H360v80Zm-80-200v480-480Z" />
  </svg>
)

export { IconBusinessMessagesSharp as default }

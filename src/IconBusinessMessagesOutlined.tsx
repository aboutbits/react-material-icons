import React from 'react'
import { IconProps } from './types'

export const IconBusinessMessagesOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-160q-33 0-56.5-23.5T200-240v-370L40-800h760q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H280Zm-68-560 68 80v400h520v-480H212Zm328 460 56-56-44-44h168v-80H360l180 180ZM360-520h360L540-700l-56 56 44 44H360v80Zm146 40Z" />
  </svg>
)

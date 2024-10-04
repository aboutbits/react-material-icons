import React from 'react'
import { IconProps } from './types.js'

export const IconBusinessMessagesSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160v-450L40-800h840v640H200Zm340-100 56-56-44-44h168v-80H360l180 180ZM360-520h360L540-700l-56 56 44 44H360v80Z" />
  </svg>
)

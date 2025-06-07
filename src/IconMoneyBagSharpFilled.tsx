import React from 'react'
import { IconProps } from './types.js'

export const IconMoneyBagSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-320q-33 0-56.5-23.5T400-400q0-33 23.5-56.5T480-480q33 0 56.5 23.5T560-400q0 33-23.5 56.5T480-320ZM295-680h370l80-160H215l80 160Zm41 560h288q90 0 153-62.5T840-336q0-38-13-74t-37-65L686-600H274L170-475q-24 29-37 65t-13 74q0 91 62.5 153.5T336-120Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

const IconAddColumnRightSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-720h320v720H80Zm400 0v-720h320v164q-10-2-19.5-3t-20.5-1q-83 0-141.5 58T560-480q0 84 58.5 142T760-280q11 0 20.5-1t19.5-3v164H480Zm240-240v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)

export { IconAddColumnRightSharpFilled as default }

import React from 'react'
import { IconProps } from './types.js'

export const IconBottomRightClickOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-80h640v-640h80v640q0 33-23.5 56.5T760-120H120Zm480-160q-33 0-56.5-23.5T520-360q0-33 23.5-56.5T600-440q33 0 56.5 23.5T680-360q0 33-23.5 56.5T600-280ZM200-480v-80h144L120-784l56-56 224 224v-144h80v280H200Z" />
  </svg>
)

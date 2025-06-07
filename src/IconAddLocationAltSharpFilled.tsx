import React from 'react'
import { IconProps } from './types.js'

export const IconAddLocationAltSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q20 0 40 2.5t40 7.5v150h120v120h117q2 11 2.5 23.5t.5 24.5q0 100-79.5 217.5T480-80Zm240-560v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
  </svg>
)

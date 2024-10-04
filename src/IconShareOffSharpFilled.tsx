import React from 'react'
import { IconProps } from './types.js'

export const IconShareOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-470v-10q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L318-509q-19-5-38.5-8t-39.5-3q-45 0-85.5 13T80-470ZM680-80q-50 0-85-35t-35-85q0-6 3-28l-43-26q-2-24-7-46.5T499-345l99 57q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40q-83 0-141.5-58.5T40-240q0-83 58.5-141.5T240-440q83 0 141.5 58.5T440-240q0 83-58.5 141.5T240-40Zm0-172 70 71 29-28-71-71 71-71-28-28-71 71-71-71-28 28 71 71-71 71 28 28 71-71Z" />
  </svg>
)
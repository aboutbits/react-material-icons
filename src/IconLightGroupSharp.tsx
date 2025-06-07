import React from 'react'
import { IconProps } from './types.js'

export const IconLightGroupSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-80h320v80H120Zm560-40q-33 0-56.5-23.5T600-200H440v-39q0-90 57-156.5T640-476v-404h80v404q87 14 143.5 80.5T920-239v39H760q0 33-23 56.5T680-120Zm-440-80v-320H28l96-360h312l96 360H320v320h-80Zm284-80h312q-12-54-56-87t-100-33q-55 0-99 33t-57 87ZM132-600h296l-53-200H186l-54 200Zm148-100Zm400 360Z" />
  </svg>
)

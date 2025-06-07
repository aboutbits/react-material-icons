import React from 'react'
import { IconProps } from './types.js'

export const IconTableLampSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-120v-80h320v80H520Zm120-120v-440H440v160H99l140-320h201v80h280v520h-80Z" />
  </svg>
)

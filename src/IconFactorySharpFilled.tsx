import React from 'react'
import { IconProps } from './types.js'

export const IconFactorySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-481l280-119v80l200-80v120h320v480H80Zm360-160h80v-160h-80v160Zm-160 0h80v-160h-80v160Zm320 0h80v-160h-80v160Zm272-380H687l34-260h119l32 260Z" />
  </svg>
)

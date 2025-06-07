import React from 'react'
import { IconProps } from './types.js'

export const IconWallLampSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-240h80v240h-80Zm214-400h372l-72-240H406l-72 240Zm0 0h372-372Zm-94 320v-80h240v-160H226l120-400h348l120 400H560v240H240Z" />
  </svg>
)

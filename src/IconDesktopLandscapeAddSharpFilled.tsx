import React from 'react'
import { IconProps } from './types.js'

export const IconDesktopLandscapeAddSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v351q-26-15-56.5-23t-62.5-8q-11 0-21 .5t-20 2.5v-163H360v60h300v122q-17 8-31.5 17.5T600-419v-101H240v200h294q-7 19-10.5 39.5T520-239q0 21 3 40.5t10 38.5H80Zm640 80v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
  </svg>
)

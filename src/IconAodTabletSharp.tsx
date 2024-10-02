import React from 'react'
import { IconProps } from './types'

export const IconAodTabletSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-160v-640h880v640H40Zm120-560h-40v480h40v-480Zm80 480h480v-480H240v480Zm560-480v480h40v-480h-40Zm0 0h40-40Zm-640 0h-40 40Zm160 220v-60h320v60H320Zm40 120v-60h240v60H360Z" />
  </svg>
)

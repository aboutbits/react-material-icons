import React from 'react'
import { IconProps } from './types.js'

export const IconTabletCameraSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-160v-640h880v640H720v-560H240v560H40Zm80-80h40v-480h-40v480Zm680 0h40v-480h-40v480ZM300-80v-280h100l40-40h80l40 40h100v280H300Zm180-70q29 0 49.5-20.5T550-220q0-29-20.5-49.5T480-290q-29 0-49.5 20.5T410-220q0 29 20.5 49.5T480-150ZM120-720h40-40Zm680 0h40-40Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

const IconScreenshotTabletSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-160v-640h880v640H40Zm120-560h-40v480h40v-480Zm80 480h480v-480H240v480Zm560-480v480h40v-480h-40Zm0 0h40-40Zm-640 0h-40 40Zm360 440h160v-160h-60v100H520v60ZM280-520h60v-100h100v-60H280v160Z" />
  </svg>
)

export { IconScreenshotTabletSharp as default }

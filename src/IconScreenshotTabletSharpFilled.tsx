import React from 'react'
import { IconProps } from './types'

const IconScreenshotTabletSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-160v-640h880v640H40Zm200-80h480v-480H240v480Zm280-40h160v-160h-60v100H520v60ZM280-520h60v-100h100v-60H280v160Z" />
  </svg>
)

export { IconScreenshotTabletSharpFilled as default }

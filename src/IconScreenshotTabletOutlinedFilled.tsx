import React from 'react'
import { IconProps } from './types'

const IconScreenshotTabletOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm120-80h480v-480H240v480Zm280-40h160v-160h-60v100H520v60ZM280-520h60v-100h100v-60H280v160Z" />
  </svg>
)

export { IconScreenshotTabletOutlinedFilled as default }

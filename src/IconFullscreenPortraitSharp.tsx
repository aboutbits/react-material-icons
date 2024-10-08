import React from 'react'
import { IconProps } from './types'

const IconFullscreenPortraitSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-240h320v-480H320v480ZM800-80H160v-800h640v800Zm-80-80v-640H240v640h480Zm0-640H240h480Z" />
  </svg>
)

export { IconFullscreenPortraitSharp as default }

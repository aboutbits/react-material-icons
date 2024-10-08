import React from 'react'
import { IconProps } from './types'

const IconFloatLandscape2SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-400h200v-240H520v240ZM80-160v-640h800v640H80Z" />
  </svg>
)

export { IconFloatLandscape2SharpFilled as default }

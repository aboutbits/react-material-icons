import React from 'react'
import { IconProps } from './types'

const IconFlashOnOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-80v-320H280v-480h400l-80 280h160L400-80Z" />
  </svg>
)

export { IconFlashOnOutlinedFilled as default }

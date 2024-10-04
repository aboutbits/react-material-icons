import React from 'react'
import { IconProps } from './types'

const IconLabelSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h560l240 320-240 320H80Zm80-80h440l180-240-180-240H160v480Zm310-240Z" />
  </svg>
)

export { IconLabelSharp as default }

import React from 'react'
import { IconProps } from './types'

const IconFormatPaintSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-80v-240H160v-360q0-66 47-113t113-47h480v520H600v240H360ZM240-560h480v-200h-40v160h-80v-160h-40v80h-80v-80H320q-33 0-56.5 23.5T240-680v120Zm0 160h480v-80H240v80Zm0 0v-80 80Z" />
  </svg>
)

export { IconFormatPaintSharp as default }

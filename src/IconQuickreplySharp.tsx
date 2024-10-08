import React from 'react'
import { IconProps } from './types'

const IconQuickreplySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-800h800v320h-80v-240H160v525l46-45h394v80H240L80-80Zm80-240v-480 480ZM760-40v-200h-80v-240h200l-68 160h88L760-40Z" />
  </svg>
)

export { IconQuickreplySharp as default }

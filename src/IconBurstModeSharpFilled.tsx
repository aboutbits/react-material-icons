import React from 'react'
import { IconProps } from './types'

const IconBurstModeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-200v-560h80v560H40Zm160 0v-560h80v560h-80Zm160 0v-560h560v560H360Zm120-160h320L696-500l-76 100-56-74-84 114Z" />
  </svg>
)

export { IconBurstModeSharpFilled as default }

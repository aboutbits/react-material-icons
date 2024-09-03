import React from 'react'
import { IconProps } from './types'

const IconWbShadeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M780-160 560-380v-100l320 320H780Zm-220 0v-120l120 120H560Zm-400 0v-400H80l240-240 240 240h-80v400H160Zm120-240h80v-160h-80v160Z" />
  </svg>
)

export { IconWbShadeOutlined as default }

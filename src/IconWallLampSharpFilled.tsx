import React from 'react'
import { IconProps } from './types'

const IconWallLampSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-240h80v240h-80Zm120-80v-80h240v-160H226l120-400h348l120 400H560v240H240Z" />
  </svg>
)

export { IconWallLampSharpFilled as default }

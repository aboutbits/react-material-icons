import React from 'react'
import { IconProps } from './types'

const IconPointOfSaleSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-640v-240h560v240H200Zm80-80h400v-80H280v80ZM80-80v-120h800v120H80Zm0-160 160-360h480l160 360H80Zm240-80h80v-40h-80v40Zm0-80h80v-40h-80v40Zm0-80h80v-40h-80v40Zm120 160h80v-40h-80v40Zm0-80h80v-40h-80v40Zm0-80h80v-40h-80v40Zm120 160h80v-40h-80v40Zm0-80h80v-40h-80v40Zm0-80h80v-40h-80v40Z" />
  </svg>
)

export { IconPointOfSaleSharp as default }

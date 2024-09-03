import React from 'react'
import { IconProps } from './types'

const IconEvStationSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-560h240v-200H240v200Zm0 360h240v-280H240v280Zm-80 80v-720h400v360h120v300h90v-420h-50v-120h20v-60h40v60h40v-60h40v60h20v120h-50v480H620v-300h-60v300H160Zm320-80H240h240Zm-140 0 100-160h-60v-120L280-320h60v120Z" />
  </svg>
)

export { IconEvStationSharp as default }

import React from 'react'
import { IconProps } from './types'

export const IconHdrPlusSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-260h60v-60h60v-60h-60v-60h-60v60h-60v60h60v60ZM280-480h60v-100h80v100h60v-240h-60v80h-80v-80h-60v240Zm240 0h150l30-30v-180l-30-30H520v240ZM340-340v-40h80v40h-80Zm78 140h62l-36-84h6l30-30v-96l-30-30H280v240h60v-80h44l34 80Zm162-340v-120h60v120h-60ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)

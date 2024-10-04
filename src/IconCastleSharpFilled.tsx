import React from 'react'
import { IconProps } from './types'

const IconCastleSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-480h80v80h80v-320h80v80h80v-80h80v80h80v-80h80v80h80v-80h80v320h80v-80h80v480H560v-200H400v200H40Zm320-360h80v-120h-80v120Zm160 0h80v-120h-80v120Z" />
  </svg>
)

export { IconCastleSharpFilled as default }

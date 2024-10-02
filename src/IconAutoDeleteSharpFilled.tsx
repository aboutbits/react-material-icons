import React from 'react'
import { IconProps } from './types'

export const IconAutoDeleteSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-600h-40v-80h200v-40h240v40h200v80h-40v172q-17-5-39.5-8.5T680-560q-18 0-40.5 3t-39.5 8v-91h-80v130q-22 16-44 39.5T440-424v-216h-80v360h40q0 39 14 83.5t36 76.5H200Zm480 40q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm66-106 28-28-74-74v-112h-40v128l86 86Z" />
  </svg>
)

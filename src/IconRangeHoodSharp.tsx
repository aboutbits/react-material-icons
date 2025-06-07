import React from 'react'
import { IconProps } from './types.js'

export const IconRangeHoodSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-280l200-200v-200h400v200l200 200v280H80Zm152-320h496L600-608v-152H360v152L232-480Zm-72 240h640v-160H160v160Zm240-52v-60h160v60H400Z" />
  </svg>
)

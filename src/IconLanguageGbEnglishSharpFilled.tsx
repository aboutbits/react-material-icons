import React from 'react'
import { IconProps } from './types.js'

export const IconLanguageGbEnglishSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-360h160v-80H600v80Zm0-160h160v-80H600v80ZM120-280v-400h320v80H200v240h160v-80h-80v-80h160v240H120Zm400 0v-400h280l40 40v120l-40 40 40 40v120l-40 40H520Z" />
  </svg>
)

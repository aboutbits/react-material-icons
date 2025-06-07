import React from 'react'
import { IconProps } from './types.js'

export const IconCleaningServicesSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-40v-480h240v-400h240v400h240v480H120Zm80-80h80v-160h80v160h80v-160h80v160h80v-160h80v160h80v-320H200v320Zm320-400v-320h-80v320h80Zm0 0h-80 80Z" />
  </svg>
)

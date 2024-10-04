import React from 'react'
import { IconProps } from './types.js'

export const IconCleaningServicesSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-40v-480h240v-400h240v400h240v480H120Zm80-80h80v-160h80v160h80v-160h80v160h80v-160h80v160h80v-320H200v320Z" />
  </svg>
)
import React from 'react'
import { IconProps } from './types.js'

export const IconPanToolAltSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M341-120 46-483l71-68 163 114v-443h80v360h80v-200h80v200h80v-160h80v160h80v-80h80v480H341Z" />
  </svg>
)

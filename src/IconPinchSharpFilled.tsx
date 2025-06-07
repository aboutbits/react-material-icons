import React from 'react'
import { IconProps } from './types.js'

export const IconPinchSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M380-720v-98L142-580h98v60H40v-200h60v98l238-238h-98v-60h200v200h-60ZM543-40 304-280l63-65 113 32v-367h80v320h40v-160h80v160h40v-120h80v120h40v-40h80v360H543Z" />
  </svg>
)

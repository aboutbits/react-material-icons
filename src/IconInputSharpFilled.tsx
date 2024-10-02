import React from 'react'
import { IconProps } from './types'

export const IconInputSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-200h80v120h640v-480H160v120H80v-200h800v640H80Zm380-140-56-58 83-82H80v-80h407l-83-82 56-58 180 180-180 180Z" />
  </svg>
)

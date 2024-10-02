import React from 'react'
import { IconProps } from './types'

export const IconMmsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-400h480L570-600 450-440l-90-120-120 160ZM80-80v-800h800v640H240L80-80Z" />
  </svg>
)

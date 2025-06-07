import React from 'react'
import { IconProps } from './types.js'

export const IconSkilletCooktopSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-360v-280h520v-69l267-89 25 76-212 71v291H120Zm240 240v-120H80v-80h360v200h-80Zm160 0v-200h360v80H600v120h-80Z" />
  </svg>
)

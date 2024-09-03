import React from 'react'
import { IconProps } from './types'

const IconSkilletCooktopSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-360v-280h520v-69l267-89 25 76-212 71v291H120Zm80-80h440v-120H200v120Zm160 320v-120H80v-80h360v200h-80Zm160 0v-200h360v80H600v120h-80ZM420-500Z" />
  </svg>
)

export { IconSkilletCooktopSharp as default }

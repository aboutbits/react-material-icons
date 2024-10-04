import React from 'react'
import { IconProps } from './types.js'

export const IconStayCurrentLandscapeSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-200v-560h880v560H40Zm120-80v-400h-40v400h40Zm80 0h480v-400H240v400Zm560 0h40v-400h-40v400ZM160-680h-40 40Zm640 0h40-40Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

const IconFormatPaintSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z" />
  </svg>
)

export { IconFormatPaintSharp as default }

import React from 'react'
import { IconProps } from './types.js'

export const IconRttSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m365-120 16-102h93l82-516H456l-29 180H321l45-282h519l-45 282H734l28-180H662l-82 516h93l-16 102H365ZM150-680l13-80h150l-13 80H150Zm-25 160 13-80h150l-13 80H125ZM75-200l12-80h250l-12 80H75Zm25-160 13-80h250l-13 80H100Z" />
  </svg>
)
import React from 'react'
import { IconProps } from './types'

export const IconPhpSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-360v-240h200v160H180v80h-60Zm260 0v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60Zm280 0v-240h200v160H720v80h-60ZM180-500h80v-40h-80v40Zm540 0h80v-40h-80v40Z" />
  </svg>
)

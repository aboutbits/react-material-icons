import React from 'react'
import { IconProps } from './types.js'

export const IconRequestPageSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-240h80v-40h80v-200H440v-40h160v-80h-80v-40h-80v40h-80v200h160v40H360v80h80v40ZM160-80v-800h400l240 240v560H160Zm80-80h480v-446L526-800H240v640Zm0 0v-640 640Z" />
  </svg>
)

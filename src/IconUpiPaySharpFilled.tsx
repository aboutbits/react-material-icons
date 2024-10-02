import React from 'react'
import { IconProps } from './types'

export const IconUpiPaySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360h60v-80h140v-160H440v240Zm240 0h60v-240h-60v240ZM500-500v-40h80v40h-80ZM200-360h200v-240h-60v180h-80v-180h-60v240ZM80-160v-640h800v640H80Z" />
  </svg>
)

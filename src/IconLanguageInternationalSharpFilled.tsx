import React from 'react'
import { IconProps } from './types.js'

export const IconLanguageInternationalSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-320v-320h80v320H40Zm120 0v-320h80l89 178-9 2v-180h80v320h-80l-89-178 9-2v180h-80Zm360 0v-240h-80v-80h240v80h-80v240h-80Zm200 0v-320h80v240h120v80H720Z" />
  </svg>
)
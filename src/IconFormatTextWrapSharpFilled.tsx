import React from 'react'
import { IconProps } from './types.js'

export const IconFormatTextWrapSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160v-640h80v640h-80Zm560 0v-640h80v640h-80Zm-296-98L282-400l142-141 56 56-45 45h85q33 0 56.5-23.5T600-520q0-33-23.5-56.5T520-600H280v-80h240q66 0 113 47t47 113q0 66-47 113t-113 47h-85l45 45-56 57Z" />
  </svg>
)
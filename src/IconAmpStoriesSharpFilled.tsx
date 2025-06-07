import React from 'react'
import { IconProps } from './types.js'

export const IconAmpStoriesSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-160v-640h400v640H280Zm-160-80v-480h80v480h-80Zm640 0v-480h80v480h-80Z" />
  </svg>
)

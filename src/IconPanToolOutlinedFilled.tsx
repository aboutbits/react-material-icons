import React from 'react'
import { IconProps } from './types.js'

export const IconPanToolOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M402-40q-30 0-56-13.5T303-92L48-465l24-23q19-19 45-22t47 12l116 81v-383q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v320h80v-400q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v400h80v-360q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v360h80v-280q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v560q0 66-47 113T680-40H402Z" />
  </svg>
)

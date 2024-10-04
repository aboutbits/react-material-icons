import React from 'react'
import { IconProps } from './types.js'

export const IconFiberSmartRecordSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-200q-117 0-198.5-81.5T80-480q0-117 81.5-198.5T360-760q117 0 198.5 81.5T640-480q0 117-81.5 198.5T360-200Zm280-4v-80q70-14 115-69t45-127q0-72-45-127t-115-69v-80q104 14 172 92.5T880-480q0 105-68 183.5T640-204Z" />
  </svg>
)
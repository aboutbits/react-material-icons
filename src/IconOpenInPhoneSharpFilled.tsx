import React from 'react'
import { IconProps } from './types.js'

export const IconOpenInPhoneSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-40v-320h80v120h400v-480H280v120h-80v-320h560v880H200Zm200-280-56-56 62-64H80v-80h326l-62-64 56-56 160 160-160 160Z" />
  </svg>
)

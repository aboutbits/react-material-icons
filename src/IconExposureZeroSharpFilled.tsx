import React from 'react'
import { IconProps } from './types.js'

export const IconExposureZeroSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-200q-100 0-160-79.5T260-480q0-121 60-200.5T480-760q100 0 160 79.5T700-480q0 121-60 200.5T480-200Zm0-82q66 0 99-60t33-138q0-78-33-138t-99-60q-66 0-99 60t-33 138q0 78 33 138t99 60Z" />
  </svg>
)
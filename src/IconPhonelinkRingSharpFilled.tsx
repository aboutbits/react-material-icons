import React from 'react'
import { IconProps } from './types.js'

export const IconPhonelinkRingSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m734-366-58-58q12-11 18.5-25.5T701-480q0-16-6.5-30.5T676-536l58-58q23 23 35 52.5t12 61.5q0 32-12 61.5T734-366Zm98 98-56-56q31-31 48-71t17-85q0-45-17-85t-48-71l56-56q43 42 66 97t23 115q0 60-23 115t-66 97ZM200-40v-880h560v240h-80v-40H280v480h400v-40h80v240H200Z" />
  </svg>
)

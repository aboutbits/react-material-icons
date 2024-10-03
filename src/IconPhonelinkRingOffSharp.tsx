import React from 'react'
import { IconProps } from './types.js'

export const IconPhonelinkRingOffSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-28 28-820l56-56L876-84l-56 56ZM200-703l80 80v383h384l96 96v104H200v-663Zm80 543v40h400v-40H280Zm0-633v-7h400v-40H280v47l-74-75v-52h554v240h-80v-40H353l-73-73Zm0 633v40-40Zm454-206-58-58q12-11 18.5-25.5T701-480q0-16-6.5-30.5T676-536l58-58q23 23 35 52.5t12 61.5q0 32-12 61.5T734-366Zm98 98-56-56q31-31 48-71t17-85q0-45-17-85t-48-71l56-56q43 42 66 97t23 115q0 60-23 115t-66 97ZM680-840v40-40Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconRemoveDoneOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M873-88 609-352 495-238 269-464l56-58 170 170 56-56-414-414 56-58 736 736-56 56ZM269-238 43-464l56-56 170 170 56 56-56 56Zm452-226-56-56 196-196 58 54-198 198ZM607-578l-56-56 86-86 56 56-86 86Z" />
  </svg>
)

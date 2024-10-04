import React from 'react'
import { IconProps } from './types.js'

export const IconMicExternalOnOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M192-680q-15-17-23.5-37t-8.5-43q0-50 35-85t85-35q50 0 85 35t35 85q0 23-8.5 43T368-680H192ZM400-80q-66 0-113-47t-47-113h-40l-40-400h240l-40 400h-40q0 33 23.5 56.5T400-160q33 0 56.5-23.5T480-240v-480q0-66 47-113t113-47q66 0 113 47t47 113v640h-80v-640q0-33-23.5-56.5T640-800q-33 0-56.5 23.5T560-720v480q0 66-47 113T400-80Z" />
  </svg>
)
import React from 'react'
import { IconProps } from './types'

export const IconSwapDrivingAppsOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m620-660-58-56 44-44H318v-80h288l-44-44 56-58 142 142-140 140ZM200-200h560v-200H200v200Zm100-40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm360 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM120-480h608l-42-120H274l44 44-56 58-142-142 142-142 56 58-44 44h426q20 0 35 11t21 29l84 240v320q0 17-11.5 28.5T800-40h-40q-17 0-28.5-11.5T720-80v-40H240v40q0 17-11.5 28.5T200-40h-40q-17 0-28.5-11.5T120-80v-400Zm80 80v200-200Z" />
  </svg>
)

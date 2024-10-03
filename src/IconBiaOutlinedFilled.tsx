import React from 'react'
import { IconProps } from './types.js'

export const IconBiaOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-600h126q-3-9-4.5-19t-1.5-21q0-11 1.5-21t4.5-19H280v80Zm360 40q58 0 109-15t51-65q0-50-51-65t-109-15q-58 0-109 15t-51 65q0 50 51 65t109 15ZM80-160v-440h120v-160h275q34-20 77-30t88-10q91 0 165.5 39.5T880-640v480H640v-200h-80v200h-80v-200h-80v200h-80v-200h-80v200H80Z" />
  </svg>
)

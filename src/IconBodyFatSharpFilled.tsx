import React from 'react'
import { IconProps } from './types.js'

export const IconBodyFatSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-320h-40v248L-20-479l820-409v248h40v80H680v-80h40v-117l-176 87q27 43 41.5 91t14.5 99q0 51-14.5 100T543-288l176 87v-119h-39v-80h160v80Zm-370-5q24-34 37-73.5t13-81.5q0-42-13-80.5T471-634L160-480l310 155Z" />
  </svg>
)

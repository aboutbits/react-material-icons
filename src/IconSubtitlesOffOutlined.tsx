import React from 'react'
import { IconProps } from './types.js'

export const IconSubtitlesOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M822-26 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v480h446l-80-80H240v-80h206L26-822l56-56L878-82l-56 56Zm48-178-70-70v-446H354l-80-80h526q33 0 56.5 23.5T880-720v476q0 11-2 21t-8 19ZM594-480l-80-80h206v80H594Zm-354 0v-80h80v80h-80Zm337-17Zm-194 34Z" />
  </svg>
)

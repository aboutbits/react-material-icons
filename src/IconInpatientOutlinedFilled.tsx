import React from 'react'
import { IconProps } from './types.js'

export const IconInpatientOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h360q33 0 56.5 23.5T600-800v640q0 33-23.5 56.5T520-80H160Zm0-459q18-11 38-16t42-5h200q22 0 42 5t38 16v-261H160v261Zm180-61q-33 0-56.5-23.5T260-680q0-33 23.5-56.5T340-760q33 0 56.5 23.5T420-680q0 33-23.5 56.5T340-600Zm440 260L640-480l140-140 56 56-43 44h127v80H793l43 44-56 56ZM300-200h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

const IconPillOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M694-376 376-694l80-80q32-32 73-49t86-17q94 0 159.5 65.5T840-615q0 45-17 86t-49 73l-80 80Zm98 324L581-263l-77 77q-32 32-73 49t-86 17q-94 0-159.5-65.5T120-345q0-45 17-86t49-73l77-77L56-788l56-56 736 736-56 56Z" />
  </svg>
)

export { IconPillOffOutlinedFilled as default }

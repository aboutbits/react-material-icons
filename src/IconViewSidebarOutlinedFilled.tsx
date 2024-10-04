import React from 'react'
import { IconProps } from './types'

const IconViewSidebarOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M780-640q-25 0-42.5-17.5T720-700v-40q0-25 17.5-42.5T780-800h40q25 0 42.5 17.5T880-740v40q0 25-17.5 42.5T820-640h-40Zm0 240q-25 0-42.5-17.5T720-460v-40q0-25 17.5-42.5T780-560h40q25 0 42.5 17.5T880-500v40q0 25-17.5 42.5T820-400h-40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h400q33 0 56.5 23.5T640-720v480q0 33-23.5 56.5T560-160H160Zm620 0q-25 0-42.5-17.5T720-220v-40q0-25 17.5-42.5T780-320h40q25 0 42.5 17.5T880-260v40q0 25-17.5 42.5T820-160h-40Z" />
  </svg>
)

export { IconViewSidebarOutlinedFilled as default }

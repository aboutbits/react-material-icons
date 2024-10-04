import React from 'react'
import { IconProps } from './types'

const IconFolderOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M871-202 274-800h114l80 80h332q33 0 56.5 23.5T880-640v400q0 11-2 20.5t-7 17.5ZM819-28 687-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80H128L28-820l56-56L876-84l-57 56Z" />
  </svg>
)

export { IconFolderOffOutlinedFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconFolderSpecialOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm344-132 92-70 92 70-34-114 92-74H632l-36-112-36 112H446l92 74-34 114Z" />
  </svg>
)

export { IconFolderSpecialOutlinedFilled as default }

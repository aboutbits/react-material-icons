import React from 'react'
import { IconProps } from './types'

const IconFolderOpenSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h320l80 80h400v80H160v400l96-320h684L820-160H80Z" />
  </svg>
)

export { IconFolderOpenSharpFilled as default }

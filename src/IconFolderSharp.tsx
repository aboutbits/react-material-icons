import React from 'react'
import { IconProps } from './types'

const IconFolderSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 4H2v16h20V6H12l-2-2z" />
  </svg>
)

export { IconFolderSharp as default }

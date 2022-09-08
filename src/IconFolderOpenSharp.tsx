import React from 'react'
import { IconProps } from './types'

const IconFolderOpenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 6H12l-2-2H2v16h20V6zm-2 12H4V8h16v10z" />
  </svg>
)

export { IconFolderOpenSharp as default }

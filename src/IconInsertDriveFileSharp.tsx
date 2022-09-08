import React from 'react'
import { IconProps } from './types'

const IconInsertDriveFileSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M4.01 2L4 22h16V8l-6-6H4.01zM13 9V3.5L18.5 9H13z" />
  </svg>
)

export { IconInsertDriveFileSharp as default }

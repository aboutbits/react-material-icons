import React from 'react'
import { IconProps } from './types'

const IconSignalCellularAlt: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z" />
  </svg>
)

export { IconSignalCellularAlt as default }

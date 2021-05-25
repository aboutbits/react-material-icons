import React from 'react'
import { IconProps } from './types'

const IconSignalCellular0Bar: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M20,6.83V20H6.83L20,6.83 M22,2L2,22h20V2L22,2z" />
  </svg>
)

export { IconSignalCellular0Bar as default }

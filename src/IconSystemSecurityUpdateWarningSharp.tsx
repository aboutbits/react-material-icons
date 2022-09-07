import React from 'react'
import { IconProps } from './types'

const IconSystemSecurityUpdateWarningSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <rect height="2" width="2" x="11" y="15" />
        <rect height="6" width="2" x="11" y="7" />
        <path d="M5.01,1v22H19V1H5.01z M17,18H7V6h10V18z" />
      </g>
    </g>
  </svg>
)

export { IconSystemSecurityUpdateWarningSharp as default }

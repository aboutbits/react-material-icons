import React from 'react'
import { IconProps } from './types'

const IconCurrencyYenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <polygon points="13.92,11 18,11 18,13 13,13 13,15 18,15 18,17 13,17 13,21 11,21 11,17 6,17 6,15 11,15 11,13 6,13 6,11 10.08,11 5,3 7.37,3 12,10.29 16.63,3 19,3" />
    </g>
  </svg>
)

export { IconCurrencyYenSharp as default }

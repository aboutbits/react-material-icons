import React from 'react'
import { IconProps } from './types'

const IconCurrencyYuanTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
      <polygon points="13.28,12 18,12 18,14 13,14 13,21 11,21 11,14 6,14 6,12 10.72,12 5,3 7.37,3 12,10.29 16.63,3 19,3" />
    </g>
  </svg>
)

export { IconCurrencyYuanTwoTone as default }

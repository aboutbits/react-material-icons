import React from 'react'
import { IconProps } from './types'

const IconCurrencyFrancOutlined: React.FC<IconProps> = ({ ...props }) => (
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
      <polygon points="18,5 18,3 7,3 7,16 5,16 5,18 7,18 7,21 9,21 9,18 13,18 13,16 9,16 9,13 17,13 17,11 9,11 9,5" />
    </g>
  </svg>
)

export { IconCurrencyFrancOutlined as default }

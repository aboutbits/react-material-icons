import React from 'react'
import { IconProps } from './types'

const IconArrowBackIosNewOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <g>
      <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12" />
    </g>
  </svg>
)

export { IconArrowBackIosNewOutlined as default }

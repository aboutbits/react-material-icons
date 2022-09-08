import React from 'react'
import { IconProps } from './types'

const IconSignalCellularAlt2BarOutlined: React.FC<IconProps> = ({
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
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <path d="M5,14h3v6H5V14z M11,9h3v11h-3V9z" />
      </g>
    </g>
  </svg>
)

export { IconSignalCellularAlt2BarOutlined as default }

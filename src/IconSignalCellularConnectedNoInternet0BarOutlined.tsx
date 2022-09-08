import React from 'react'
import { IconProps } from './types'

const IconSignalCellularConnectedNoInternet0BarOutlined: React.FC<
  IconProps
> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M20,18h2v-8h-2V18z M20,22h2v-2h-2V22z M18,20v2H2L22,2v6h-2V6.83L6.83,20H18z" />
  </svg>
)

export { IconSignalCellularConnectedNoInternet0BarOutlined as default }

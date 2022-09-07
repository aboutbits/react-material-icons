import React from 'react'
import { IconProps } from './types'

const IconAlignHorizontalRightOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M20,2h2v20h-2V2z M2,10h16V7H2V10z M8,17h10v-3H8V17z" />
  </svg>
)

export { IconAlignHorizontalRightOutlined as default }

import React from 'react'
import { IconProps } from './types'

const IconLegendToggle: React.FC<IconProps> = ({
  title = 'IconLegendToggle',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{title}</title>
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M20,15H4v-2h16V15z M20,17H4v2h16V17z M15,11l5-3.55L20,5l-5,3.55L10,5L4,8.66L4,11l5.92-3.61L15,11z" />
    </g>
  </svg>
)

export { IconLegendToggle as default }

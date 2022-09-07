import React from 'react'
import { IconProps } from './types'

const IconAnalyticsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <rect fill="none" height="5" width="2" x="7" y="12" />
    <rect fill="none" height="3" width="2" x="11" y="14" />
    <rect fill="none" height="10" width="2" x="15" y="7" />
    <path d="M3,3v18h18V3H3z M9,17H7v-5h2V17z M13,17h-2v-3h2V17z M13,12h-2v-2h2V12z M17,17h-2V7h2V17z" />
  </svg>
)

export { IconAnalyticsSharp as default }

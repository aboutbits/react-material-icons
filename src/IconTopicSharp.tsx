import React from 'react'
import { IconProps } from './types'

const IconTopicSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M12,6l-2-2H2v16h20V6H12z M14,16H6v-2h8V16z M18,12H6v-2h12V12z" />
    </g>
  </svg>
)

export { IconTopicSharp as default }

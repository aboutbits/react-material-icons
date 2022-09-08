import React from 'react'
import { IconProps } from './types'

const IconCleaningServicesSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M15,11V1H9v10H3v12h18V11H15z M19,21h-2v-4h-2v4h-2v-4h-2v4H9v-4H7v4H5v-8h14V21z" />
    </g>
  </svg>
)

export { IconCleaningServicesSharp as default }

import React from 'react'
import { IconProps } from './types'

const IconEmergencyRecordingSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M18,10.48V4H2v16h16v-6.48l4,3.98v-11L18,10.48z M12,12l3,1.73l-1,1.73l-3-1.73V17H9v-3.27l-3,1.73l-1-1.73L8,12l-3-1.73 l1-1.73l3,1.73V7h2v3.27l3-1.73l1,1.73L12,12z" />
    </g>
  </svg>
)

export { IconEmergencyRecordingSharp as default }

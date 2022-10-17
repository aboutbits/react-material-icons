import React from 'react'
import { IconProps } from './types'

const IconBedtimeOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <path d="M11.65 3.46c.27-.71-.36-1.45-1.12-1.34-1.48.21-2.85.76-4.04 1.54l4.59 4.59c-.2-1.56-.04-3.2.57-4.79zm-9.55.05c-.39.39-.39 1.02 0 1.41l1.56 1.56c-1.4 2.11-2.02 4.77-1.46 7.56.79 3.94 3.99 7.07 7.94 7.78 2.74.49 5.3-.15 7.35-1.51l1.57 1.57c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L3.51 3.51c-.39-.39-1.02-.39-1.41 0z" />
      </g>
    </g>
  </svg>
)

export { IconBedtimeOffRounded as default }

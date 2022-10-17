import React from 'react'
import { IconProps } from './types'

const IconBrightness1Rounded: React.FC<IconProps> = ({ ...props }) => (
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
        <g>
          <g>
            <circle cx="12" cy="12" r="10" />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export { IconBrightness1Rounded as default }

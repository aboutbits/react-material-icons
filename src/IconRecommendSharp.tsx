import React from 'react'
import { IconProps } from './types'

const IconRecommendSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M18,12.05L15.46,18H7l0-7.56L12,5l1,1l0,0.53 L12.41,10H18V12.05z" />
      </g>
    </g>
  </svg>
)

export { IconRecommendSharp as default }
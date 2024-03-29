import React from 'react'
import { IconProps } from './types'

const IconTakeoutDiningSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="22,7.46 20.59,6.05 19,7.63 19.03,7.07 14.98,3 9.02,3 4.97,7.07 5,7.57 3.41,6.01 2,7.44 4.66,10 19.35,10" />
        <polygon points="5.93,20 18.07,20 18.7,11.55 5.3,11.55" />
      </g>
    </g>
  </svg>
)

export { IconTakeoutDiningSharp as default }

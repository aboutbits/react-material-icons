import React from 'react'
import { IconProps } from './types'

const IconAutoFixOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <polygon points="20,7 20.94,4.94 23,4 20.94,3.06 20,1 19.06,3.06 17,4 19.06,4.94" />
        <polygon points="14.17,8.42 15.58,9.83 14.12,11.29 15.54,12.71 18.41,9.83 14.17,5.59 11.29,8.46 12.71,9.88" />
        <polygon points="1.39,4.22 8.46,11.29 1.59,18.17 5.83,22.41 12.71,15.54 19.78,22.61 21.19,21.19 2.81,2.81" />
      </g>
    </g>
  </svg>
)

export { IconAutoFixOffSharp as default }

import React from 'react'
import { IconProps } from './types'

const IconSportsGymnasticsRound: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M4,6c0-1.1,0.9-2,2-2s2,0.9,2,2S7.1,8,6,8S4,7.1,4,6z M13,22c-0.56,0-1.02-0.44-1.05-1l-0.45-9L8,11H2c-0.55,0-1-0.45-1-1 s0.45-1,1-1h5l6.26-4.47c0.42-0.3,1-0.23,1.34,0.16c0.38,0.45,0.3,1.12-0.18,1.46L11.14,8.5H14l7.09-4.09 c0.41-0.24,0.93-0.15,1.24,0.21c0.36,0.43,0.3,1.07-0.14,1.41L14.5,12l-0.45,9C14.02,21.56,13.56,22,13,22z" />
    </g>
  </svg>
)

export { IconSportsGymnasticsRound as default }

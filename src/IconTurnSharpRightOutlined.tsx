import React from 'react'
import { IconProps } from './types'

const IconTurnSharpRightOutlined: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M18,6.83l1.59,1.59L21,7l-4-4l-4,4l1.41,1.41L16,6.83V13H8c-1.1,0-2,0.9-2,2v6h2v-6h8c1.1,0,2-0.9,2-2V6.83z" />
    </g>
  </svg>
)

export { IconTurnSharpRightOutlined as default }

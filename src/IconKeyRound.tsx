import React from 'react'
import { IconProps } from './types'

const IconKeyRound: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M20.59,10h-7.94C11.7,7.31,8.89,5.5,5.77,6.12c-2.29,0.46-4.15,2.3-4.63,4.58C0.32,14.58,3.26,18,7,18 c2.61,0,4.83-1.67,5.65-4H13l1.29,1.29c0.39,0.39,1.02,0.39,1.41,0L17,14l1.29,1.29c0.39,0.39,1.03,0.39,1.42,0l2.59-2.61 c0.39-0.39,0.39-1.03-0.01-1.42l-0.99-0.97C21.1,10.1,20.85,10,20.59,10z M7,15c-1.65,0-3-1.35-3-3c0-1.65,1.35-3,3-3s3,1.35,3,3 C10,13.65,8.65,15,7,15z" />
    </g>
  </svg>
)

export { IconKeyRound as default }
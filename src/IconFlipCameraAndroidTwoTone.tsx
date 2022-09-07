import React from 'react'
import { IconProps } from './types'

const IconFlipCameraAndroidTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
        <circle cx="12" cy="12" opacity=".3" r="1" />
        <path d="M9,12c0,1.66,1.34,3,3,3s3-1.34,3-3s-1.34-3-3-3S9,10.34,9,12z M13,12c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1 S13,11.45,13,12z" />
        <path d="M8,8H5.09C6.47,5.61,9.05,4,12,4c3.72,0,6.85,2.56,7.74,6h2.06c-0.93-4.56-4.96-8-9.8-8C8.73,2,5.82,3.58,4,6.01V4H2v6h6 V8z" />
        <path d="M16,14v2h2.91c-1.38,2.39-3.96,4-6.91,4c-3.72,0-6.85-2.56-7.74-6H2.2c0.93,4.56,4.96,8,9.8,8c3.27,0,6.18-1.58,8-4.01V20 h2v-6H16z" />
      </g>
    </g>
  </svg>
)

export { IconFlipCameraAndroidTwoTone as default }

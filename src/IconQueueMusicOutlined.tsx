import React from 'react'
import { IconProps } from './types'

const IconQueueMusicOutlined: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M22,6h-5v8.18C16.69,14.07,16.35,14,16,14c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3V8h3V6z M15,6H3v2h12V6z M15,10H3v2h12 V10z M11,14H3v2h8V14z" />
    </g>
  </svg>
)

export { IconQueueMusicOutlined as default }

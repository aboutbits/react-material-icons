import React from 'react'
import { IconProps } from './types'

const IconAudioFile: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M16,13h-3v3.75 c0,1.24-1.01,2.25-2.25,2.25S8.5,17.99,8.5,16.75c0-1.24,1.01-2.25,2.25-2.25c0.46,0,0.89,0.14,1.25,0.38V11h4V13z M13,9V3.5 L18.5,9H13z" />
    </g>
  </svg>
)

export { IconAudioFile as default }
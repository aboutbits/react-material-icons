import React from 'react'
import { IconProps } from './types'

const IconFireHydrantAltTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
        <path
          d="M12,4c-1.47,0-2.75,0.81-3.44,2h6.89C14.75,4.81,13.47,4,12,4z"
          opacity=".3"
        />
        <circle cx="12" cy="14" opacity=".3" r="1.5" />
        <path
          d="M16,8H8v5H5v2h3v5h8v-5h3v-2h-3V8z M12,17.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5 S13.93,17.5,12,17.5z"
          opacity=".3"
        />
        <path d="M12,10.5c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S13.93,10.5,12,10.5z M12,15.5 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S12.83,15.5,12,15.5z" />
        <path d="M19,11h-1V8h2V6h-2.35C16.83,3.67,14.61,2,12,2S7.17,3.67,6.35,6H4v2h2v3H5c-1.1,0-2,0.9-2,2v2c0,1.1,0.9,2,2,2h1v3H4v2 h16v-2h-2v-3h1c1.1,0,2-0.9,2-2v-2C21,11.9,20.1,11,19,11z M12,4c1.47,0,2.75,0.81,3.44,2H8.56C9.25,4.81,10.53,4,12,4z M19,15h-3 v5H8v-5H5v-2h3V8h8v5h3V15z" />
      </g>
    </g>
  </svg>
)

export { IconFireHydrantAltTwoTone as default }

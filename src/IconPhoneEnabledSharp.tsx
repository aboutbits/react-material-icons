import React from 'react'
import { IconProps } from './types'

const IconPhoneEnabledSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <g>
      <g>
        <path d="m3 15.46 5.27-.61 2.52 2.52c2.83-1.44 5.15-3.75 6.59-6.59l-2.53-2.53.61-5.25h5.51C21.55 13.18 13.18 21.55 3 20.97v-5.51z" />
      </g>
    </g>
  </svg>
)

export { IconPhoneEnabledSharp as default }

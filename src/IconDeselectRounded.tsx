import React from 'react'
import { IconProps } from './types'

const IconDeselectRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M3,13h2v-2H3V13z M7,21h2v-2H7V21z M13,3h-2v2h2V3z M19,3v2h2C21,3.9,20.1,3,19,3z M5,21v-2H3C3,20.1,3.9,21,5,21z M3,17h2 v-2H3V17z M11,21h2v-2h-2V21z M19,13h2v-2h-2V13z M19,9h2V7h-2V9z M15,5h2V3h-2V5z M7.83,5L7,4.17V3h2v2H7.83z M19.83,17L19,16.17 V15h2v2H19.83z M9,15v-3.17L12.17,15H9z M2.1,3.51c-0.39,0.39-0.39,1.02,0,1.41L4.17,7H3v2h2V7.83l2,2V16c0,0.55,0.45,1,1,1h6.17 l2,2H15v2h2v-1.17l2.07,2.07c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51C3.12,3.12,2.49,3.12,2.1,3.51z M17,8c0-0.55-0.45-1-1-1H9.83l2,2H15v3.17l2,2V8z" />
    </g>
  </svg>
)

export { IconDeselectRounded as default }

import React from 'react'
import { IconProps } from './types'

const IconDeselectSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M3,13h2v-2H3V13z M7,21h2v-2H7V21z M13,3h-2v2h2V3z M19,3v2h2V3H19z M5,21v-2H3v2H5z M3,17h2v-2H3V17z M11,21h2v-2h-2V21z M19,13h2v-2h-2V13z M19,9h2V7h-2V9z M15,5h2V3h-2V5z M7.83,5L7,4.17V3h2v2H7.83z M19.83,17L19,16.17V15h2v2H19.83z M21.19,21.19 L2.81,2.81L1.39,4.22L4.17,7H3v2h2V7.83l2,2V17h7.17l2,2H15v2h2v-1.17l2.78,2.78L21.19,21.19z M9,15v-3.17L12.17,15H9z M15,12.17V9 h-3.17l-2-2H17v7.17L15,12.17z" />
    </g>
  </svg>
)

export { IconDeselectSharp as default }

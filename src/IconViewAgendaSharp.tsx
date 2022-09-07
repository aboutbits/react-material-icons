import React from 'react'
import { IconProps } from './types'

const IconViewAgendaSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" y="0" />
    </g>
    <g>
      <g>
        <rect height="8" width="18" x="3" y="13" />
        <rect height="8" width="18" x="3" y="3" />
      </g>
    </g>
  </svg>
)

export { IconViewAgendaSharp as default }

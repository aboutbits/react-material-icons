import React from 'react'
import { IconProps } from './types'

const IconKingBedSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <rect fill="none" height="3" width="5" x="6" y="7" />
        <rect fill="none" height="3" width="5" x="13" y="7" />
        <path d="M20,10V5H4v5H2v7h1.33L4,19h1l0.67-2h12.67L19,19h1l0.67-2H22v-7H20z M11,10H6V7h5V10z M18,10h-5V7h5V10z" />
      </g>
    </g>
  </svg>
)

export { IconKingBedSharp as default }

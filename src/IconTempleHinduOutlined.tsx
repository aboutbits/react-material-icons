import React from 'react'
import { IconProps } from './types'

const IconTempleHinduOutlined: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M20,11v2h-2L15,3V1h-2v2h-2.03V1h-2v2.12L6,13H4v-2H2v11h9v-5h2v5h9V11H20z M15.31,11H8.69l0.6-2h5.42L15.31,11z M14.11,7 H9.89l0.6-2h3.02L14.11,7z M20,20h-5v-5H9v5H4v-5h3.49l0.6-2h7.82l0.6,2H20V20z" />
    </g>
  </svg>
)

export { IconTempleHinduOutlined as default }
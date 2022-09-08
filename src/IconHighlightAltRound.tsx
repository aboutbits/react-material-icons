import React from 'react'
import { IconProps } from './types'

const IconHighlightAltRound: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M17,5h-2V3h2V5z M19,9h2V7h-2V9z M19,13h2v-2h-2V13z M11,21h2v-2h-2V21z M7,5h2V3H7V5z M3,17h2v-2H3V17z M5,21v-2H3 C3,20.1,3.9,21,5,21z M19,3v2h2C21,3.9,20.1,3,19,3z M11,5h2V3h-2V5z M3,9h2V7H3V9z M7,21h2v-2H7V21z M3,13h2v-2H3V13z M3,5h2V3 C3.9,3,3,3.9,3,5z M18.71,17.29l1.44-1.44c0.32-0.32,0.09-0.85-0.35-0.85H16c-0.55,0-1,0.45-1,1v3.79c0,0.45,0.54,0.67,0.85,0.35 l1.44-1.44l2,2c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41L18.71,17.29z" />
    </g>
  </svg>
)

export { IconHighlightAltRound as default }

import React from 'react'
import { IconProps } from './types'

const IconDryRound: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M1.94,11.79C1.34,12.36,1,13.14,1,13.97V20c0,1.66,1.34,3,3,3l13.68,0c0.65,0,1.25-0.47,1.32-1.12 c0.08-0.75-0.51-1.38-1.24-1.38H12.5c-0.28,0-0.5-0.22-0.5-0.5v0c0-0.28,0.22-0.5,0.5-0.5l7.18,0c0.65,0,1.25-0.47,1.32-1.12 c0.08-0.75-0.51-1.38-1.24-1.38H12.5c-0.28,0-0.5-0.22-0.5-0.5l0,0c0-0.28,0.22-0.5,0.5-0.5l8.18,0c0.65,0,1.25-0.47,1.32-1.12 c0.08-0.75-0.51-1.38-1.24-1.38H12.5c-0.28,0-0.5-0.22-0.5-0.5v0c0-0.28,0.22-0.5,0.5-0.5l6.18,0c0.65,0,1.25-0.47,1.32-1.12 c0.08-0.75-0.51-1.38-1.24-1.38H8.86l1.49-2.61c0.09-0.16,0.14-0.33,0.14-0.53c0-0.26-0.09-0.5-0.26-0.7L9.81,5.71 C9.43,5.32,8.8,5.3,8.4,5.68L1.94,11.79z M16.99,8.07c0,0.52-0.42,0.93-0.93,0.93c-0.52,0-0.93-0.42-0.93-0.93l0,0 c0.03-0.67-0.22-1.33-0.71-1.86l-0.07-0.06c-0.9-0.89-1.38-2.03-1.34-3.22l0,0C13,2.42,13.42,2,13.93,2c0.51,0,0.93,0.42,0.93,0.93 l0,0c-0.03,0.67,0.22,1.33,0.71,1.86l0.07,0.07C16.55,5.74,17.03,6.88,16.99,8.07L16.99,8.07z M21,8.07C21,8.58,20.58,9,20.06,9 s-0.93-0.42-0.93-0.93l0,0c0.03-0.67-0.22-1.33-0.71-1.86l-0.07-0.06c-0.9-0.89-1.38-2.03-1.34-3.22l0,0 c0-0.51,0.42-0.93,0.93-0.93s0.93,0.42,0.93,0.93l0,0c-0.03,0.67,0.22,1.33,0.71,1.86l0.07,0.07C20.55,5.74,21.03,6.88,21,8.07 L21,8.07z" />
    </g>
  </svg>
)

export { IconDryRound as default }

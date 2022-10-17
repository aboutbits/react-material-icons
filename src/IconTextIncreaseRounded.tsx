import React from 'react'
import { IconProps } from './types'

const IconTextIncreaseRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M2.61,19L2.61,19c0.48,0,0.91-0.3,1.06-0.75l1.01-2.83h5.65l0.99,2.82C11.48,18.7,11.91,19,12.39,19 c0.79,0,1.33-0.79,1.05-1.52L9.19,6.17C8.93,5.47,8.25,5,7.5,5S6.07,5.47,5.81,6.17L1.56,17.48C1.28,18.21,1.83,19,2.61,19z M7.44,7.6h0.12l2.03,5.79H5.41L7.44,7.6z M15,12c0-0.55,0.45-1,1-1h2V9c0-0.55,0.45-1,1-1s1,0.45,1,1v2h2c0.55,0,1,0.45,1,1 s-0.45,1-1,1h-2v2c0,0.55-0.45,1-1,1s-1-0.45-1-1v-2h-2C15.45,13,15,12.55,15,12z" />
  </svg>
)

export { IconTextIncreaseRounded as default }

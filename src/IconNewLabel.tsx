import React from 'react'
import { IconProps } from './types'

const IconNewLabel: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M21,12l-4.37,6.16C16.26,18.68,15.65,19,15,19h-3l0-6H9v-3H3V7c0-1.1,0.9-2,2-2h10c0.65,0,1.26,0.31,1.63,0.84L21,12z M10,15H7v-3H5v3H2v2h3v3h2v-3h3V15z" />
  </svg>
)

export { IconNewLabel as default }

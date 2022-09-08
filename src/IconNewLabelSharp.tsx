import React from 'react'
import { IconProps } from './types'

const IconNewLabelSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M21,12l-4.97,7H12l0-2l0-4H9v-3H3V5h13.03L21,12z M10,15H7v-3H5v3H2v2h3v3h2v-3h3V15z" />
  </svg>
)

export { IconNewLabelSharp as default }

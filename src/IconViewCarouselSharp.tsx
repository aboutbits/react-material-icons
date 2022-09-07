import React from 'react'
import { IconProps } from './types'

const IconViewCarouselSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M2,7h4v10H2V7z M7,19h10V5H7V19z M18,7h4v10h-4V7z" />
  </svg>
)

export { IconViewCarouselSharp as default }

import React from 'react'
import { IconProps } from './types'

const IconFlightClassSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" y="0" />
    <path d="M18,4h-6v9h6V4z M9.5,16H18v2H8L5,8V4h2v4L9.5,16z M8,19h10v2H8V19z" />
  </svg>
)

export { IconFlightClassSharp as default }

import React from 'react'
import { IconProps } from './types'

const IconNorthWest: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{props.title === undefined ? 'IconNorthWest' : props.title}</title>
    <rect fill="none" height="24" width="24" />
    <path d="M5,15h2V8.41L18.59,20L20,18.59L8.41,7H15V5H5V15z" />
  </svg>
)

export { IconNorthWest as default }

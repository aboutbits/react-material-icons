import React from 'react'
import { IconProps } from './types'

const IconNorthEast: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{props.title === undefined ? 'IconNorthEast' : props.title}</title>
    <rect fill="none" height="24" width="24" />
    <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z" />
  </svg>
)

export { IconNorthEast as default }

import React from 'react'
import { IconProps } from './types'

const IconTvGenOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-80q-33 0-56.5-23.5T80-280v-440q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v440q0 33-23.5 56.5T800-200v80h-40l-26-80H227l-27 80h-40Z" />
  </svg>
)

export { IconTvGenOutlinedFilled as default }

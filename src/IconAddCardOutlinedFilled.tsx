import React from 'react'
import { IconProps } from './types'

const IconAddCardOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-480h640v-160H160v160ZM760-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80Zm-600-80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v240H760q-83 0-141.5 58.5T560-280v120H160Z" />
  </svg>
)

export { IconAddCardOutlinedFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconStraightenOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h120v240h80v-240h80v240h80v-240h80v240h80v-240h120q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Z" />
  </svg>
)

export { IconStraightenOutlinedFilled as default }

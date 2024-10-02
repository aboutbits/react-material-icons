import React from 'react'
import { IconProps } from './types'

export const IconAccountTreeRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-200v-40h-80q-33 0-56.5-23.5T440-320v-320h-80v40q0 33-23.5 56.5T280-520H160q-33 0-56.5-23.5T80-600v-160q0-33 23.5-56.5T160-840h120q33 0 56.5 23.5T360-760v40h240v-40q0-33 23.5-56.5T680-840h120q33 0 56.5 23.5T880-760v160q0 33-23.5 56.5T800-520H680q-33 0-56.5-23.5T600-600v-40h-80v320h80v-40q0-33 23.5-56.5T680-440h120q33 0 56.5 23.5T880-360v160q0 33-23.5 56.5T800-120H680q-33 0-56.5-23.5T600-200ZM160-760v160-160Zm520 400v160-160Zm0-400v160-160Zm0 160h120v-160H680v160Zm0 400h120v-160H680v160ZM160-600h120v-160H160v160Z" />
  </svg>
)

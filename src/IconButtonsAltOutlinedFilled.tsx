import React from 'react'
import { IconProps } from './types'

const IconButtonsAltOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm130-120h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Z" />
  </svg>
)

export { IconButtonsAltOutlinedFilled as default }

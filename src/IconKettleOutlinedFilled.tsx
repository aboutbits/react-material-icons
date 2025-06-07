import React from 'react'
import { IconProps } from './types.js'

export const IconKettleOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-200v-520L120-880h600v120h80q33 0 56.5 23.5T880-680v200q0 33-23.5 56.5T800-400h-80v200H240Zm480-280h80v-200h-80v200ZM480-320h120v-440H480v440ZM120-80v-80h720v80H120Z" />
  </svg>
)

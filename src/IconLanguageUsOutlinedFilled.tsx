import React from 'react'
import { IconProps } from './types.js'

export const IconLanguageUsOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280q-33 0-56.5-23.5T160-360v-320h80v320h120v-320h80v320q0 33-23.5 56.5T360-280H240Zm360 0q-33 0-56.5-23.5T520-360v-40h80v40h120v-80H600q-33 0-56.5-23.5T520-520v-80q0-33 23.5-56.5T600-680h120q33 0 56.5 23.5T800-600v40h-80v-40H600v80h120q33 0 56.5 23.5T800-440v80q0 33-23.5 56.5T720-280H600Z" />
  </svg>
)
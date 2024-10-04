import React from 'react'
import { IconProps } from './types.js'

export const IconFormatPaintRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-80q-33 0-56.5-23.5T360-160v-160H240q-33 0-56.5-23.5T160-400v-280q0-66 47-113t113-47h440q17 0 28.5 11.5T800-800v400q0 33-23.5 56.5T720-320H600v160q0 33-23.5 56.5T520-80h-80ZM240-560h480v-200h-40v120q0 17-11.5 28.5T640-600q-17 0-28.5-11.5T600-640v-120h-40v40q0 17-11.5 28.5T520-680q-17 0-28.5-11.5T480-720v-40H320q-33 0-56.5 23.5T240-680v120Z" />
  </svg>
)
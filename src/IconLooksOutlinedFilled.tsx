import React from 'react'
import { IconProps } from './types.js'

export const IconLooksOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-280q0-91 34.5-171T169-591q60-60 140-94.5T480-720q91 0 171 34.5T791-591q60 60 94.5 140T920-280h-80q0-149-105.5-254.5T480-640q-149 0-254.5 105.5T120-280H40Zm160 0q0-116 82-198t198-82q116 0 198 82t82 198h-80q0-83-58.5-141.5T480-480q-83 0-141.5 58.5T280-280h-80Z" />
  </svg>
)
import React from 'react'
import { IconProps } from './types.js'

export const IconCallLogRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M758-80q-125 0-247-54.5T289-289Q189-389 134.5-511T80-758q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T347-346q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T630-350l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM520-800q-17 0-28.5-11.5T480-840q0-17 11.5-28.5T520-880h320q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H520Zm0 160q-17 0-28.5-11.5T480-680q0-17 11.5-28.5T520-720h320q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640H520Zm0 160q-17 0-28.5-11.5T480-520q0-17 11.5-28.5T520-560h320q17 0 28.5 11.5T880-520q0 17-11.5 28.5T840-480H520Z" />
  </svg>
)
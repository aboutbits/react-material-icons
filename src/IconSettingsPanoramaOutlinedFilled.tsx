import React from 'react'
import { IconProps } from './types.js'

export const IconSettingsPanoramaOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M570-82q-19 5-34.5-6.5T520-120v-200q0-20 15.5-31.5T571-358q37 10 74 14t75 4q38 0 75.5-4t74.5-14q19-5 34.5 6.5T920-320v200q0 20-15.5 31.5T870-82q-37-10-74.5-14t-75.5-4q-38 0-75.5 4T570-82Zm-200 2-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v33.5q0 10-2 20H616q3-10 4.5-19.5T622-480q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 48 27.5 84t70.5 50v266h-70Z" />
  </svg>
)

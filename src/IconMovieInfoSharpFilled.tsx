import React from 'react'
import { IconProps } from './types.js'

export const IconMovieInfoSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-720h800v720H80Zm80-80h80v-80h-80v80Zm560 0h80v-80h-80v80Zm-280-80h80v-240h-80v240Zm-280-80h80v-80h-80v80Zm560 0h80v-80h-80v80ZM160-520h80v-80h-80v80Zm560 0h80v-80h-80v80Zm-240-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm-320-80h80v-80h-80v80Zm560 0h80v-80h-80v80Z" />
  </svg>
)
import React from 'react'
import { IconProps } from './types.js'

export const IconMovieInfoOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h80v-80h-80v80Zm560 0h80v-80h-80v80Zm-280-80h80v-240h-80v240Zm-280-80h80v-80h-80v80Zm560 0h80v-80h-80v80ZM160-520h80v-80h-80v80Zm560 0h80v-80h-80v80Zm-240-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm-320-80h80v-80h-80v80Zm560 0h80v-80h-80v80ZM320-200h320v-560H320v560Zm0-560h320-320Z" />
  </svg>
)
